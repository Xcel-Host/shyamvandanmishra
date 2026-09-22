(function () {
  var root = document.documentElement;
  var toggle = document.getElementById('theme-toggle');

  function syncToggle() {
    if (!toggle) return;
    var isDark = root.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-checked', isDark ? 'true' : 'false');
  }
  syncToggle();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var isDark = root.getAttribute('data-theme') === 'dark';
      if (isDark) {
        root.removeAttribute('data-theme');
        try { localStorage.setItem('theme', 'light'); } catch (e) {}
      } else {
        root.setAttribute('data-theme', 'dark');
        try { localStorage.setItem('theme', 'dark'); } catch (e) {}
      }
      syncToggle();
    });
  }

  var copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', function () {
      var email = 'vshyam098@gmail.com';
      var original = copyBtn.textContent;
      function done(ok) {
        copyBtn.textContent = ok ? 'Copied' : 'Copy failed';
        setTimeout(function () { copyBtn.textContent = original; }, 1500);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(function () { done(true); }, function () { done(false); });
      } else {
        done(false);
      }
    });
  }
})();
