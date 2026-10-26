document.addEventListener("DOMContentLoaded", () => {
    const tabsRole = document.querySelectorAll("[data-role]");
    const tabsMode = document.querySelectorAll("[data-mode]");
    const fLogin = document.getElementById("f-login");
    const fSeeker = document.getElementById("f-seeker");
    const fRecruiter = document.getElementById("f-recruiter");
    const msgBox = document.getElementById("msg");

    let currentRole = "seeker";
    let currentMode = "login";

    function updateForms() {
        if (msgBox) { msgBox.className = "hidden"; msgBox.textContent = ""; }

        if (currentMode === "login") {
            if (fLogin) fLogin.classList.remove("hidden");
            if (fSeeker) fSeeker.classList.add("hidden");
            if (fRecruiter) fRecruiter.classList.add("hidden");
        } else {
            if (fLogin) fLogin.classList.add("hidden");
            if (currentRole === "seeker") {
                if (fSeeker) fSeeker.classList.remove("hidden");
                if (fRecruiter) fRecruiter.classList.add("hidden");
            } else {
                if (fSeeker) fSeeker.classList.add("hidden");
                if (fRecruiter) fRecruiter.classList.remove("hidden");
            }
        }
    }

    tabsRole.forEach(btn => {
        btn.addEventListener("click", (e) => {
            tabsRole.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentRole = e.target.getAttribute("data-role");
            updateForms();
        });
    });

    tabsMode.forEach(btn => {
        btn.addEventListener("click", (e) => {
            tabsMode.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            currentMode = e.target.getAttribute("data-mode");
            updateForms();
        });
    });

    if (fLogin) {
        fLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("l_email").value.trim();
            const pass = document.getElementById("l_password").value.trim();
            if (!email || !pass) {
                showMsg("Please fill in all fields.", "error");
                return;
            }
            localStorage.setItem("jobhunt_user", JSON.stringify({ email, role: "seeker" }));
            showMsg("Login successful! Redirecting...", "success");
            setTimeout(() => window.location.href = "dashboard.html", 1000);
        });
    }

    if (fSeeker) {
        fSeeker.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("s_name").value.trim();
            const email = document.getElementById("s_email").value.trim();
            if (!name || !email) {
                showMsg("Please enter your name and email.", "error");
                return;
            }
            localStorage.setItem("jobhunt_user", JSON.stringify({ name, email, role: "seeker" }));
            showMsg("Registration successful! Redirecting...", "success");
            setTimeout(() => window.location.href = "dashboard.html", 1000);
        });
    }

    if (fRecruiter) {
        fRecruiter.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("r_name").value.trim();
            const company = document.getElementById("r_company").value.trim();
            if (!name || !company) {
                showMsg("Please enter your name and company.", "error");
                return;
            }
            localStorage.setItem("jobhunt_user", JSON.stringify({ name, company, role: "recruiter" }));
            showMsg("Recruiter registered & job posted successfully!", "success");
            setTimeout(() => window.location.href = "dashboard.html", 1000);
        });
    }

    function showMsg(text, type) {
        if (!msgBox) return;
        msgBox.textContent = text;
        msgBox.className = `msg ${type}`;
    }
});