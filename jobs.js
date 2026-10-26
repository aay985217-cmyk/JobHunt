document.addEventListener("DOMContentLoaded", () => {
    const jobListContainer = document.getElementById("jobList");
    const qInput = document.getElementById("q");
    const modeFilter = document.getElementById("modeFilter");
    const deptFilter = document.getElementById("deptFilter");

    if (deptFilter) {
        const depts = [...new Set(JOBS.map(j => j.dept))];
        depts.forEach(d => {
            const opt = document.createElement("option");
            opt.value = d;
            opt.textContent = d;
            deptFilter.appendChild(opt);
        });
    }

    function renderJobs() {
        if (!jobListContainer) return;
        const query = qInput ? qInput.value.toLowerCase() : "";
        const mode = modeFilter ? modeFilter.value : "";
        const dept = deptFilter ? deptFilter.value : "";

        const filtered = JOBS.filter(job => {
            const matchQuery = !query || job.role.toLowerCase().includes(query) || job.company.toLowerCase().includes(query) || job.skills.some(s => s.toLowerCase().includes(query)) || job.location.toLowerCase().includes(query);
            const matchMode = !mode || job.mode === mode;
            const matchDept = !dept || job.dept === dept;
            return matchQuery && matchMode && matchDept;
        });

        if (filtered.length === 0) {
            jobListContainer.innerHTML = `<div class="empty">No matching jobs found. Try adjusting your filters.</div>`;
            return;
        }

        jobListContainer.innerHTML = filtered.map(job => `
      <article class="card job">
        <h3>${job.role}</h3>
        <p class="muted">${job.company} &bull; ${job.location}</p>
        <div class="meta">
          <div><strong>Salary:</strong> ${job.salary}</div>
          <div><strong>Mode:</strong> <span class="badge mode">${job.mode}</span></div>
          <div><strong>Hours:</strong> ${job.hours}</div>
          <div><strong>Bond:</strong> ${job.bond}</div>
        </div>
        <div class="tags">
          ${job.skills.map(s => `<span class="tag">${s}</span>`).join("")}
        </div>
        <div class="foot">
          <span class="match">Match: 85%</span>
          <button class="btn small applyBtn" data-id="${job.id}">Apply Now</button>
        </div>
      </article>
    `).join("");

        document.querySelectorAll(".applyBtn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const jobId = parseInt(e.target.getAttribute("data-id"));
                const job = JOBS.find(j => j.id === jobId);
                alert(`Successfully applied for ${job.role} at ${job.company}! Check your dashboard for updates.`);
            });
        });
    }

    if (qInput) qInput.addEventListener("input", renderJobs);
    if (modeFilter) modeFilter.addEventListener("change", renderJobs);
    if (deptFilter) deptFilter.addEventListener("change", renderJobs);

    renderJobs();
});