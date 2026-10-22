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
  // Updates are manual only (see checkForUpdate); no automatic update checks.
  try {
    await navigator.serviceWorker.register("/sw.js", { scope: "/" });
  } catch { /* offline or unsupported */ }
}

export type UpdateResult = "offline" | "latest" | "updating" | "unsupported";

// Called only from «تحديث بيانات التطبيق».
export async function checkForUpdate(): Promise<UpdateResult> {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) return "unsupported";
  if (!navigator.onLine) return "offline";
  const reg = await navigator.serviceWorker.getRegistration("/");
  if (!reg) return "unsupported";
  // Listen before calling update(): its promise can resolve before `installing` is set.
  const found = new Promise<ServiceWorker | null>((res) => {
    if (reg.installing) return res(reg.installing);
    const t = setTimeout(() => res(reg.installing), 8000);
    reg.addEventListener("updatefound", () => { clearTimeout(t); res(reg.installing); }, { once: true });
  });
  if (!reg.waiting) {
    try { await reg.update(); } catch { return "offline"; }
  }
  let waiting = reg.waiting;
  if (!waiting) {
    const w = await found;
    if (w) {
      await new Promise<void>((res) => {
        if (w.state === "installed" || w.state === "redundant") return res();
        const t = setTimeout(res, 60000);
        w.addEventListener("statechange", () => {
          if (w.state === "installed" || w.state === "redundant") { clearTimeout(t); res(); }
        });
      });
    }
    waiting = reg.waiting;
  }
  if (!waiting) return "latest";
  navigator.serviceWorker.addEventListener("controllerchange", () => location.reload(), { once: true });
  waiting.postMessage({ type: "SKIP_WAITING" });
  return "updating";
}
