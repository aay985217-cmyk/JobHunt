document.addEventListener("DOMContentLoaded", () => {
    const dash = document.getElementById("dash");
    if (!dash) return;

    const user = getCurrentUser() || { name: "Demo Seeker", email: "seeker@jobhunt.test", role: "seeker" };
    const apps = getApplications();

    if (user.role === "seeker") {
        dash.innerHTML = `
      <h1>Welcome back, ${user.name || "Seeker"}</h1>
      <p class="muted" style="margin-bottom:1.5rem">Track your submitted applications and resume status.</p>
      
      <div class="stats">
        <div class="stat"><span>Total Applications</span><b>${apps.length}</b></div>
        <div class="stat"><span>Shortlisted</span><b>${apps.filter(a => a.status === "Shortlisted").length}</b></div>
        <div class="stat"><span>Pending Review</span><b>${apps.filter(a => a.status === "Applied").length}</b></div>
      </div>

      <h2 style="margin-top:2rem">My Applications</h2>
      <div class="table-wrap" style="margin-top:1rem">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Company</th>
              <th>Status</th>
              <th>Feedback / Reason</th>
            </tr>
          </thead>
          <tbody>
            ${apps.map(app => `
              <tr>
                <td><strong>${app.role}</strong></td>
                <td>${app.company}</td>
                <td><span class="badge ${app.status.toLowerCase()}">${app.status}</span></td>
                <td>${app.reason || "Under review by hiring team."}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
    } else {
        dash.innerHTML = `
      <h1>Recruiter Dashboard</h1>
      <p class="muted" style="margin-bottom:1.5rem">Manage your company job posts and applicant pool.</p>
      <div class="stats">
        <div class="stat"><span>Active Job Posts</span><b>1</b></div>
        <div class="stat"><span>Total Applicants</span><b>${apps.length}</b></div>
      </div>
      <div style="margin-top:2rem"><a class="btn" href="login.html">Post a new job</a></div>
    `;
    }
});