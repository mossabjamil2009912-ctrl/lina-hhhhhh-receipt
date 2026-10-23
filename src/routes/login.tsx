import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import { checkPassword } from "@/lib/gate";
import { readOwner } from "@/lib/owner";
import { JaibLoader } from "@/components/JaibMark";
import logo from "@/assets/jaib/l2_logo.webp";
import mlogo from "@/assets/jaib/l2_mlogo.webp";
import usr from "@/assets/jaib/l2_usr.webp";
import bld from "@/assets/jaib/l2_bld.webp";
import ph from "@/assets/jaib/l2_ph.webp";
import eye from "@/assets/jaib/l2_eye.webp";
import fpBig from "@/assets/jaib/l2_fpbig.webp";
import fp from "@/assets/jaib/lg_fp.webp";
import c0 from "@/assets/jaib/l2_c0.webp";
import c1 from "@/assets/jaib/l2_c1.webp";
import c2 from "@/assets/jaib/l2_c2.webp";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "جيب - تسجيل الدخول" },
      { name: "description", content: "تسجيل الدخول إلى محفظة جيب" },
      { property: "og:title", content: "جيب - تسجيل الدخول" },
      { property: "og:description", content: "تسجيل الدخول إلى محفظة جيب" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Login,
});

const S = 887 / 390;
const W = 390;
const H = 1774 / S;
const box = (x1: number, y1: number, x2: number, y2: number): CSSProperties => ({
  position: "absolute", left: x1 / S, top: y1 / S, width: (x2 - x1) / S, height: (y2 - y1) / S,
});

function Login() {
  const router = useRouter();
  const [zoom, setZoom] = useState(1);
  const [type, setType] = useState<"client" | "pos">("client");
  const [phone, setPhone] = useState("773590979");
  useEffect(() => setPhone(readOwner().phone), []);
  const [pw, setPw] = useState("7735909");
  const [err, setErr] = useState(false);
  const [busy, setBusy] = useState(false);
  const [offline, setOffline] = useState(false);
  const [sheet, setSheet] = useState(true);
  const [bio, setBio] = useState(false);
  useEffect(() => {
    const f = () => setZoom(Math.min(window.innerWidth / W, window.innerHeight / H));
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);

  const enter = async () => {
    sessionStorage.setItem("jaib-auth", "1");
    await router.navigate({ to: "/" });
  };

  function finger() {
    if (bio) return;
    setSheet(false);
    setBio(true);
    setTimeout(enter, 1000);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    let ok = false;
    try { ok = await checkPassword(pw); } catch { ok = false; }
    setBusy(false);
    if (ok) await enter();
    else setErr(true);
  }

  const tab = (on: boolean) => `rounded-[6px] border transition active:scale-95 ${on ? "border-foreground/30 bg-login-tab" : "border-foreground/15 bg-transparent"}`;

  return (
    <div className="flex h-[100dvh] w-full justify-center overflow-hidden bg-card">
      <form onSubmit={submit} style={{ zoom, width: W, height: H }} className="relative shrink-0 overflow-hidden bg-card [&_img]:mix-blend-multiply">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[200px] opacity-[0.04] [mask-image:linear-gradient(to_bottom,black,transparent)]" style={{ backgroundImage: `url(${mlogo})`, backgroundSize: "44px auto", backgroundRepeat: "repeat" }} />
        <img src={logo} alt="جيب" style={box(310, 100, 580, 220)} />
        <h1 style={{ position: "absolute", right: 35 / S, top: 300 / S }} className="text-[19px] font-extrabold leading-none">مرحبًا بعودتك</h1>
        <p style={{ position: "absolute", right: 35 / S, top: 366 / S }} className="text-[15.5px] leading-none text-muted-foreground">قم بتسجيل الدخول</p>

        <button type="button" onClick={() => setType("client")} style={box(453, 444, 857, 593)} className={tab(type === "client")}>
          <img src={usr} alt="" style={{ position: "absolute", left: (615 - 453) / S, top: 14 / S, width: 75 / S, height: 68 / S }} />
          <span style={{ position: "absolute", left: 0, right: 0, top: 96 / S }} className="text-center text-[14px] leading-none">عميل</span>
        </button>
        <button type="button" onClick={() => setType("pos")} style={box(30, 444, 438, 593)} className={tab(type === "pos")}>
          <img src={bld} alt="" style={{ position: "absolute", left: (195 - 30) / S, top: 14 / S, width: 77 / S, height: 68 / S }} />
          <span style={{ position: "absolute", left: 0, right: 0, top: 96 / S }} className="text-center text-[14px] leading-none">نقطة مبيعات</span>
        </button>

        <label style={{ position: "absolute", right: 35 / S, top: 625 / S }} className="text-[12px] leading-none text-muted-foreground">رقم الجوال</label>
        <div style={box(30, 672, 857, 775)} className="rounded-[6px] border border-foreground/15 bg-transparent">
          <input value={phone} onChange={(e) => setPhone(e.target.value)} inputMode="numeric" dir="ltr" className="h-full w-full bg-transparent pl-[48px] pr-[10px] text-right text-[14px] outline-none" />
          <img src={ph} alt="" style={{ position: "absolute", left: 25 / S, top: 21 / S, width: 57 / S, height: 59 / S }} />
        </div>

        <label style={{ position: "absolute", right: 35 / S, top: 818 / S }} className="text-[12px] leading-none text-muted-foreground">كلمة المرور</label>
        <div style={box(30, 865, 857, 968)} className={`rounded-[6px] border bg-transparent ${err ? "border-primary" : "border-foreground/15"}`}>
          {bio ? (
            <>
              <div className="absolute inset-0 flex items-center justify-center"><div className="scale-[0.7] drop-shadow-[0_1px_3px_rgba(0,0,0,0.25)]"><JaibLoader /></div></div>
              <img src={fp} alt="" style={{ position: "absolute", left: 25 / S, top: 22 / S, width: 60 / S, height: 60 / S }} />
            </>
          ) : (
            <>
              <input type="password" value={pw} onChange={(e) => { setPw(e.target.value); setErr(false); }} inputMode="numeric" autoComplete="current-password" aria-label="كلمة المرور" dir="ltr" className="h-full w-full bg-transparent pl-[48px] pr-[10px] text-right text-[14px] outline-none" />
              <img src={eye} alt="" style={{ position: "absolute", left: 20 / S, top: 22 / S, width: 62 / S, height: 58 / S }} />
            </>
          )}
        </div>
        {err && <p style={{ position: "absolute", left: 30 / S, top: 985 / S }} className="text-[11px] leading-none text-primary">كلمة المرور غير صحيحة</p>}

        <button type="submit" disabled={busy || bio} style={box(30, 1016, 857, 1113)} className="rounded-[6px] bg-primary text-[15px] font-bold text-primary-foreground transition active:scale-[0.98] disabled:opacity-90">
          {type === "client" ? "تسجيل الدخول كعميل" : "تسجيل الدخول كنقطة مبيعات"}
        </button>

        <label style={{ position: "absolute", right: 30 / S, top: 1195 / S }} className="flex items-center gap-[8px] text-[14px] font-bold leading-none">
          <input type="checkbox" checked={offline} onChange={(e) => setOffline(e.target.checked)} className="h-[17px] w-[17px] accent-primary" />
          دخول بدون نت
        </label>
        <p style={{ position: "absolute", left: 30 / S, top: 1152 / S }} className="text-[12.5px] leading-none text-muted-foreground">
          لا تمتلك حساب؟ <button type="button" className="font-bold text-primary">إنشاء حساب</button>
        </p>

        <button type="button" onClick={finger} aria-label="الدخول بالبصمة" style={{ ...box(360, 1222, 527, 1390), zIndex: 30 }} className="rounded-full bg-card transition active:scale-90">
          <img src={fpBig} alt="" className="h-full w-full" />
        </button>

        {[{ img: c0, label: "الرقم المجاني", x: 553 }, { img: c1, label: "نقاط الخدمة", x: 387 }, { img: c2, label: "خدمة العملاء", x: 220 }].map((c) => (
          <button key={c.label} type="button" style={box(c.x - 20, 1430, c.x + 134, 1580)} className="transition active:scale-90">
            <img src={c.img} alt="" style={{ position: "absolute", left: 20 / S, top: 0, width: 114 / S, height: 103 / S }} />
            <span style={{ position: "absolute", left: 0, right: 0, top: 118 / S }} className="text-center text-[11.5px] leading-none text-muted-foreground">{c.label}</span>
          </button>
        ))}

        {sheet && <div onClick={() => setSheet(false)} className="fixed inset-0 z-10 bg-foreground/10" />}
        {sheet && (
          <div style={{ ...box(135, 755, 752, 1175), zIndex: 20 }} className="rounded-[18px] bg-login-sheet shadow-[0_6px_30px_rgba(0,0,0,0.15)]">
            <img src={mlogo} alt="جيب" style={{ position: "absolute", left: (372 - 135) / S, top: 40 / S, width: 140 / S, height: 63 / S }} />
            <div style={{ position: "absolute", left: 0, right: 0, top: 140 / S }} className="text-center text-[15px] font-extrabold leading-none">محفظة جيب</div>
            <div style={{ position: "absolute", left: 0, right: 0, top: 190 / S }} className="text-center text-[14px] leading-none" dir="ltr">{phone}</div>
            <div style={{ position: "absolute", left: 0, right: 0, top: 250 / S }} className="text-center text-[11.5px] leading-none text-muted-foreground">استخدم البصمة للاستمرار</div>
            <div style={{ position: "absolute", left: 35 / S, right: 35 / S, top: 321 / S }} className="h-px bg-foreground/10" />
            <button type="button" onClick={() => setSheet(false)} style={{ position: "absolute", left: 0, right: 0, top: 322 / S, height: 98 / S }} className="text-center text-[14px] font-bold">استخدم كلمة المرور</button>
          </div>
        )}
      </form>
    </div>
  );
}
