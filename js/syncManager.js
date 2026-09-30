// GramaGuide — Offline-to-Online Synchronization Manager
// Queues activities locally during offline periods and synchronizes when connected
// Modular architecture prepared for future cloud/backend integration

window.GramaSync = (function() {
  async function getDB() {
    if (window.GramaProgress && window.GramaProgress.initDB) {
      return await window.GramaProgress.initDB();
    }
    return null;
  }

  // Queue an action when user performs activity
  async function queueAction(actionType, payload) {
    const item = {
      actionType,
      payload,
      createdAt: new Date().toISOString(),
      status: "pending"
    };

    const db = await getDB();
    if (db) {
      try {
        const tx = db.transaction(["syncQueue"], "readwrite");
        tx.objectStore("syncQueue").add(item);
      } catch (err) {
        console.warn("[SyncManager] Failed to write queue in IndexedDB", err);
      }
    } else {
      // Fallback in localStorage
      try {
        const queue = JSON.parse(localStorage.getItem("grama_sync_queue") || "[]");
        queue.push(item);
        localStorage.setItem("grama_sync_queue", JSON.stringify(queue));
      } catch (e) {}
    }

    console.log(`[SyncManager] Queued action: ${actionType}`, payload);

    // If currently online, process immediately
    if (navigator.onLine) {
      processQueue();
    }
  }

  // Process queued actions
  async function processQueue() {
    if (!navigator.onLine) {
      console.log("[SyncManager] Offline: Sync postponed until connection returns.");
      return;
    }

    const db = await getDB();
    if (!db) return;

    try {
      const tx = db.transaction(["syncQueue"], "readwrite");
      const store = tx.objectStore("syncQueue");
      const req = store.getAll();

      req.onsuccess = () => {
        const items = req.result || [];
        if (items.length === 0) return;

        console.log(`[SyncManager] Processing ${items.length} pending offline actions...`);

        // In standalone offline-first client, we process queue into consolidated local state
        // and prepare records for any future remote backend endpoint.
        items.forEach(item => {
          console.log(`[SyncManager] Synced: ${item.actionType}`, item.payload);
        });

        // Clear processed items from syncQueue store
        const clearTx = db.transaction(["syncQueue"], "readwrite");
        clearTx.objectStore("syncQueue").clear();

        // Update local sync timestamp
        localStorage.setItem("grama_last_synced_at", new Date().toISOString());
        console.log("[SyncManager] Sync queue cleared successfully.");
      };
    } catch (err) {
      console.warn("[SyncManager] Error reading syncQueue", err);
    }
  }

  // Get count of pending items for debugging or UI
  async function getPendingCount() {
    const db = await getDB();
    if (!db) return 0;
    return new Promise(resolve => {
      try {
        const tx = db.transaction(["syncQueue"], "readonly");
        const countReq = tx.objectStore("syncQueue").count();
        countReq.onsuccess = () => resolve(countReq.result || 0);
        countReq.onerror = () => resolve(0);
      } catch (e) {
        resolve(0);
      }
    });
  }

  return {
    queueAction,
    processQueue,
    getPendingCount
  };
})();
