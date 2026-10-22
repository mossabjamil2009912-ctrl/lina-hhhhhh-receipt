// The only place that registers the offline service worker.
export async function setupPwa() {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
  const h = location.hostname;
  let framed = false;
  try { framed = window.self !== window.top; } catch { framed = true; }
  const refuse =
    !import.meta.env.PROD ||
    framed ||
    h.startsWith("id-preview--") ||
    h.startsWith("preview--") ||
    h === "lovableproject.com" || h.endsWith(".lovableproject.com") ||
    h === "lovableproject-dev.com" || h.endsWith(".lovableproject-dev.com") ||
    h === "beta.lovable.dev" || h.endsWith(".beta.lovable.dev") ||
    new URLSearchParams(location.search).get("sw") === "off";
  if (refuse) {
    const regs = await navigator.serviceWorker.getRegistrations();
    await Promise.all(regs.filter((r) => r.active?.scriptURL.endsWith("/sw.js")).map((r) => r.unregister()));
    return;
  }
  // Reload once when a new version takes over, so the newest screens show at once.
  const hadController = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!hadController) return;
    const k = "jaib-sw-reloaded";
    const last = Number(sessionStorage.getItem(k) || 0);
    if (Date.now() - last < 15000) return;
    sessionStorage.setItem(k, String(Date.now()));
    location.reload();
  });
  try {
    const reg = await navigator.serviceWorker.register("/sw.js", { scope: "/" });
    const check = () => { if (navigator.onLine) reg.update().catch(() => {}); };
    check();
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "visible") check(); });
  } catch { /* offline or unsupported */ }
}
