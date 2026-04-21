/* ===========================
   Active Dics — Banner de Cookies (LGPD)
   =========================== */
(function () {
  var STORAGE_KEY = 'activedics_cookie_consent';

  function hideBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.style.transform = 'translateY(100%)';
      banner.style.opacity = '0';
      setTimeout(function () { banner.remove(); }, 400);
    }
  }

  function showBanner() {
    var banner = document.getElementById('cookie-banner');
    if (banner) {
      setTimeout(function () {
        banner.style.transform = 'translateY(0)';
        banner.style.opacity = '1';
      }, 600);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem(STORAGE_KEY)) return;

    var banner = document.getElementById('cookie-banner');
    if (!banner) return;

    showBanner();

    document.getElementById('cookie-accept').addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, 'accepted');
      hideBanner();
    });

    document.getElementById('cookie-decline').addEventListener('click', function () {
      localStorage.setItem(STORAGE_KEY, 'declined');
      hideBanner();
    });
  });
})();
