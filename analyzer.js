document.addEventListener("DOMContentLoaded", () => {
    const analyzeBtn = document.getElementById("analyzeBtn");
    const resumeText = document.getElementById("resumeText");
    const customSkills = document.getElementById("customSkills");
    const resultDiv = document.getElementById("result");

    if (analyzeBtn && resumeText && resultDiv) {
        analyzeBtn.addEventListener("click", () => {
            const text = resumeText.value.trim();
            if (!text) {
                alert("Please paste your resume text to analyze.");
                return;
            }

            const requiredSkills = (customSkills && customSkills.value.trim())
                ? customSkills.value.split(",").map(s => s.trim()).filter(Boolean)
                : ["Python", "SQL", "Git", "Flask"];

            const lowerText = text.toLowerCase();
            let matchedCount = 0;
            const skillStatus = requiredSkills.map(skill => {
                const found = lowerText.includes(skill.toLowerCase());
                if (found) matchedCount++;
                return { skill, found };
            });

            const score = Math.round((matchedCount / requiredSkills.length) * 100);

            resultDiv.classList.remove("hidden");
            resultDiv.className = "card";
            resultDiv.innerHTML = `
        <h3>Analysis Result</h3>
        <div class="score">${score}%</div>
        <p class="muted">Skill match score based on required criteria.</p>
        <div class="bar"><i style="width: ${score}%"></i></div>
        <h4>Detected Skills:</h4>
        <div class="tags">
          ${skillStatus.map(s => `<span class="tag ${s.found ? 'hit' : ''}">${s.skill} ${s.found ? '✓' : '✗'}</span>`).join("")}
        </div>
        <p style="margin-top:1rem"><strong>Recommendation:</strong> ${score > 70 ? 'Your resume is well aligned with the role requirements!' : 'Consider adding missing keywords to improve your score.'}</p>
      `;
        });
    }
});