// GramaGuide — Offline & Network Connectivity Monitor
// Keeps user informed with crystal clear visual status indicators

function initOfflineDetector() {
  const statusBadge = document.getElementById("network-status-badge");
  const statusText = document.getElementById("network-status-text");
  const offlineBanner = document.getElementById("offline-status-banner");
  const bannerText = document.getElementById("offline-banner-message");

  function updateNetworkUI(isOnline) {
    if (!statusBadge || !statusText) return;

    if (isOnline) {
      statusBadge.classList.remove("offline");
      statusText.textContent = window.t ? window.t("onlineStatus") : "Online";

      if (offlineBanner && bannerText) {
        bannerText.textContent = window.t ? window.t("onlineBannerText") : "Internet connection restored. Syncing...";
        offlineBanner.style.background = "var(--color-secondary)";
        offlineBanner.classList.add("visible");
        setTimeout(() => {
          offlineBanner.classList.remove("visible");
          offlineBanner.style.background = "var(--color-warning)";
        }, 4000);
      }

      // Process any queued offline actions
      if (window.GramaSync) {
        window.GramaSync.processQueue();
      }
    } else {
      statusBadge.classList.add("offline");
      statusText.textContent = window.t ? window.t("offlineStatus") : "Offline Mode";

      if (offlineBanner && bannerText) {
        bannerText.textContent = window.t ? window.t("offlineBannerText") : "You're offline. All lessons are saved on this phone.";
        offlineBanner.style.background = "var(--color-warning)";
        offlineBanner.classList.add("visible");
      }
    }
  }

  window.addEventListener("online", () => {
    console.log("[GramaGuide] Network restored: Online");
    updateNetworkUI(true);
  });

  window.addEventListener("offline", () => {
    console.log("[GramaGuide] Network lost: Offline Mode active");
    updateNetworkUI(false);
  });

  // Initial check
  updateNetworkUI(navigator.onLine);
}

window.initOfflineDetector = initOfflineDetector;
