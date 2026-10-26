document.addEventListener("DOMContentLoaded", () => {
    const fields = ["name", "title", "email", "phone", "address", "summary", "skills", "education", "experience", "projects", "certifications", "template"];
    const preview = document.getElementById("preview");
    const printBtn = document.getElementById("printBtn");

    // Optional: Add a compress button dynamically next to the print button if desired
    const formActions = document.querySelector(".builder .form-actions");
    if (formActions && !document.getElementById("compressBtn")) {
        const compressBtn = document.createElement("button");
        compressBtn.id = "compressBtn";
        compressBtn.type = "button";
        compressBtn.className = "btn outline small";
        compressBtn.textContent = "Compact Spacing";
        formActions.appendChild(compressBtn);

        compressBtn.addEventListener("click", () => {
            preview.classList.toggle("compact-mode");
            compressBtn.textContent = preview.classList.contains("compact-mode") ? "Normal Spacing" : "Compact Spacing";
        });
    }

    function updatePreview() {
        if (!preview) return;
        const values = {};
        fields.forEach(id => {
            const el = document.getElementById(id);
            values[id] = el ? el.value : "";
        });

        preview.className = `paper ${values.template || "t1"} ${preview.classList.contains("compact-mode") ? "compact-mode" : ""}`;
        preview.innerHTML = `
      <h2>${values.name || "Your Name"}</h2>
      <p style="font-weight:600;color:var(--teal)">${values.title || "Professional Title"}</p>
      <p class="muted">${[values.email, values.phone, values.address].filter(Boolean).join(" &bull; ")}</p>
      
      ${values.summary ? `<h4>Summary</h4><p>${values.summary}</p>` : ""}
      ${values.skills ? `<h4>Skills</h4><p>${values.skills}</p>` : ""}
      ${values.education ? `<h4>Education</h4><p style="white-space:pre-line">${values.education}</p>` : ""}
      ${values.experience ? `<h4>Experience</h4><p style="white-space:pre-line">${values.experience}</p>` : ""}
      ${values.projects ? `<h4>Projects</h4><p style="white-space:pre-line">${values.projects}</p>` : ""}
      ${values.certifications ? `<h4>Certifications</h4><p style="white-space:pre-line">${values.certifications}</p>` : ""}
    `;
    }

    fields.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener("input", updatePreview);
            el.addEventListener("change", updatePreview);
        }
    });

    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }

    updatePreview();
});