"use client";
import { useState } from "react";

const portals = [
  { id: "Learner", detail: "Access your learning programme" },
  { id: "Professor", detail: "Teach and assess learners" },
  { id: "Government", detail: "Monitor programme outcomes" },
  { id: "Administrator", detail: "Manage the Academy" },
];

export default function Home() {
  const [role, setRole] = useState("Learner");
  const [track, setTrack] = useState("Doctor");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [language, setLanguage] = useState("English");
  const [message, setMessage] = useState("");

  function handleSignIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setMessage("Please enter your email address and password.");
      return;
    }
    window.location.href = `/dashboard?role=${encodeURIComponent(role)}&track=${encodeURIComponent(track)}&preview=1`;
  }

  return (
    <main className="min-h-screen bg-[#f4f6f3] text-[#173b2a]">
      <div className="grid min-h-screen lg:grid-cols-[1fr_1fr]">
        <section className="relative flex min-h-[430px] flex-col overflow-hidden bg-[#123b2a] px-7 py-8 text-white sm:px-12 lg:min-h-screen lg:px-16 lg:py-12">
          <div className="pointer-events-none absolute -right-28 top-24 h-96 w-96 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-12 top-40 h-64 w-64 rounded-full border border-white/10" />
          <a href="https://durckheim.com" className="relative z-10 flex w-fit items-center gap-4" aria-label="Durckheim AB home">
            <span className="flex h-[92px] w-[92px] items-center justify-center overflow-hidden">
              <img src="/durckheim-logo.webp" alt="Durckheim logo" className="h-full w-full object-contain" />
            </span>
            <span><strong className="block text-lg tracking-[0.22em]">DURCKHEIM</strong><span className="mt-1 block text-[10px] tracking-[0.25em] text-[#c6d5c5]">ONCOLOGY ACADEMY</span></span>
          </a>
          <div className="relative z-10 my-auto max-w-xl py-14 lg:py-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#b9cc9a]/30 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d6e2c2]"><span className="h-1.5 w-1.5 rounded-full bg-[#b7cf7b]" /> Excellence in oncology education</div>
            <h1 className="max-w-xl font-serif text-4xl leading-[1.12] sm:text-5xl lg:text-6xl">Advancing cancer care through education.</h1>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#d2ded4] sm:text-base">A dedicated learning environment for the next generation of oncology doctors and nurses, supported by expert faculty and structured clinical education.</p>
            <div className="mt-10 grid max-w-lg gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-white/15 bg-white/[0.06] p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c2d69a]">Medical doctors</p><p className="mt-2 font-serif text-2xl">5-year pathway</p><p className="mt-2 text-xs leading-5 text-[#d2ded4]">Structured oncology residency education.</p></div>
              <div className="rounded-xl border border-white/15 bg-white/[0.06] p-5"><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#c2d69a]">Nursing professionals</p><p className="mt-2 font-serif text-2xl">2-year pathway</p><p className="mt-2 text-xs leading-5 text-[#d2ded4]">Specialist oncology nursing education.</p></div>
            </div>
          </div>
          <div className="relative z-10 flex flex-wrap justify-between gap-3 border-t border-white/15 pt-5 text-[11px] text-[#c2d2c5]"><span>Structured learning · Faculty-led teaching · Clinical excellence</span><a href="https://durckheim.com" className="text-white">durckheim.com ↗</a></div>
        </section>

        <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-14">
          <div className="w-full max-w-[470px]">
            <div className="mb-9 flex items-center justify-between">
              <div className="flex items-center gap-3 lg:hidden"><img src="/durckheim-logo.webp" alt="Durckheim logo" className="h-10 w-10 object-contain" /><span className="text-xs font-bold tracking-widest">DURCKHEIM ACADEMY</span></div>
              <label className="ml-auto"><span className="sr-only">Language</span><select value={language} onChange={e => setLanguage(e.target.value)} className="rounded-lg border border-[#dce4dc] bg-white px-3 py-2 text-xs text-[#4f6657]">{["English", "Swedish", "French", "Arabic", "Spanish"].map(item => <option key={item}>{item}</option>)}</select></label>
            </div>
            <div className="mb-7"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#78964f]">Academy access</p><h2 className="mt-3 font-serif text-3xl text-[#173b2a] sm:text-4xl">Welcome back</h2><p className="mt-2 text-sm text-[#748176]">Sign in to continue to your learning and professional portal.</p></div>

            <div className="mb-5"><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.17em] text-[#657568]">Choose your portal</p><div className="grid grid-cols-2 gap-2.5">
              {portals.map((portal, i) => <button key={portal.id} type="button" onClick={() => setRole(portal.id)} aria-pressed={role === portal.id} className={`rounded-xl border px-3.5 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-[#9db77a] ${role === portal.id ? "border-[#547c3c] bg-[#edf3e8] shadow-sm" : "border-[#e0e7df] bg-white hover:border-[#a9bc9e]"}`}><span className="text-[9px] font-bold tracking-widest text-[#8aa078]">0{i + 1}</span><strong className="mt-1 block text-sm text-[#244632]">{portal.id}</strong><span className="mt-0.5 block text-[11px] leading-4 text-[#7b887d]">{portal.detail}</span></button>)}
            </div></div>

            {role === "Learner" && <div className="mb-5"><p className="mb-2 text-[10px] font-bold uppercase tracking-[0.17em] text-[#657568]">Learning pathway</p><div className="grid grid-cols-2 gap-2">{["Doctor", "Nurse"].map(item => <button key={item} type="button" onClick={() => setTrack(item)} aria-pressed={track === item} className={`rounded-lg border px-4 py-2.5 text-sm font-semibold ${track === item ? "border-[#739552] bg-[#f0f5eb] text-[#315a35]" : "border-[#e0e7df] bg-white text-[#718071]"}`}>{item} programme</button>)}</div></div>}

            <form onSubmit={handleSignIn} className="space-y-4">
              <div><label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-[#465c4b]">Email address</label><input id="email" type="email" autoComplete="username" required value={email} onChange={e => setEmail(e.target.value)} placeholder="name@institution.org" className="w-full rounded-lg border border-[#dce4dc] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#a6b0a6] focus:border-[#789b54] focus:ring-2 focus:ring-[#789b54]/15" /></div>
              <div><label htmlFor="password" className="mb-1.5 block text-xs font-semibold text-[#465c4b]">Password</label><input id="password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" className="w-full rounded-lg border border-[#dce4dc] bg-white px-4 py-3 text-sm outline-none placeholder:text-[#a6b0a6] focus:border-[#789b54] focus:ring-2 focus:ring-[#789b54]/15" /></div>
              <div className="flex items-center justify-between text-xs"><label className="flex items-center gap-2 text-[#778477]"><input type="checkbox" className="h-3.5 w-3.5 accent-[#315d38]" /> Keep me signed in</label><button type="button" onClick={() => setMessage("Please contact the Academy administrator to reset your password.")} className="font-semibold text-[#547c3c]">Forgot password?</button></div>
              <button type="submit" className="w-full rounded-lg bg-[#17452f] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#225c3e] focus:outline-none focus:ring-2 focus:ring-[#789b54] focus:ring-offset-2">Sign in <span aria-hidden="true">→</span></button>
              {message && <p role="status" className="rounded-lg border border-[#eadfbd] bg-[#fff9e9] p-3 text-xs leading-5 text-[#785f2e]">{message}</p>}
            </form>
            <div className="mt-6 rounded-lg border border-[#e5eae3] bg-[#f8faf7] p-3.5 text-[10px] leading-5 text-[#778477]"><strong className="text-[#526653]">Preview environment.</strong> Secure authentication, password recovery and face verification are not yet connected. Sign-in currently opens a dashboard preview.</div>
            <p className="mt-7 text-center text-[10px] text-[#9aa49a]">© 2026 Durckheim AB. All rights reserved.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
