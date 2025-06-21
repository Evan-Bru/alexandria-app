






<button id="themeToggle" class="btn btn-outline-light btn-sm theme-toggle" title="Alternar tema">
            <i class="bi bi-sun-fill" id="themeIcon"></i>
</button>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"></script>
<script>
        const themeToggle = document.getElementById("themeToggle");
        const themeIcon = document.getElementById("themeIcon");
        const html = document.documentElement;

        themeToggle.addEventListener("click", () => {
            const current = html.getAttribute("data-bs-theme");
            const next = current === "light" ? "dark" : "light";
            html.setAttribute("data-bs-theme", next);
            themeIcon.className = next === "dark" ? "bi bi-moon-fill" : "bi bi-sun-fill";
        });
</script>