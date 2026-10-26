document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    if (header) {
        header.innerHTML = `
      <header class="nav">
        <div class="wrap">
          <a class="logo" href="index.html" aria-label="JobHunt home"><i class="bi bi-compass"></i>JobHunt<span>.</span></a>
          <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="menu"><i class="bi bi-list"></i></button>
          <nav aria-label="Main">
            <ul class="menu" id="menu">
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="jobs.html">Jobs</a></li>
              <li><a href="analyzer.html">AI Analyzer</a></li>
              <li><a href="resume.html">Make a Resume</a></li>
              <li><a href="dashboard.html">Dashboard</a></li>
              <li><a class="login" href="login.html">Login</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
    }

    const footer = document.getElementById("site-footer");
    if (footer) {
        footer.innerHTML = `
      <div class="container footer-grid">
        <div>
          <h4>JobHunt</h4>
          <p>Connecting verified seekers with clear, transparent job roles.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="jobs.html">Find Jobs</a>
          <a href="analyzer.html">AI Analyzer</a>
          <a href="resume.html">Resume Maker</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="about.html#compliance">Compliance</a>
          <a href="about.html#privacy">Privacy Policy</a>
        </div>
      </div>
      <div class="copy">&copy; 2026 JobHunt. All rights reserved.</div>
    `;
    }

    const burger = document.getElementById("burger");
    const menu = document.getElementById("menu");
    if (burger && menu) {
        burger.addEventListener("click", () => {
            burger.classList.toggle("open");
            menu.classList.toggle("open");
            const expanded = burger.getAttribute("aria-expanded") === "true";
            burger.setAttribute("aria-expanded", !expanded);
        });
    }

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".menu a");
    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage || (currentPage === "" && href === "index.html")) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        } else {
            link.classList.remove("active");
            link.removeAttribute("aria-current");
        }
    });
});