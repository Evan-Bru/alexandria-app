document.addEventListener('DOMContentLoaded', function () {
  const toggles = document.querySelectorAll('.eye');

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      const targetSelector = this.getAttribute('toggle');
      const targetInput = document.querySelector(targetSelector);

      if (!targetInput) return;

      const isPassword = targetInput.getAttribute('type') === 'password';
      targetInput.setAttribute('type', isPassword ? 'text' : 'password');

      this.classList.toggle('bi-eye-fill');
      this.classList.toggle('bi-eye-slash-fill');
    });
  });
});
