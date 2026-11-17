"use client";

import { useState } from "react";

const portals = [
  { id: "Learner", title: "Learner", detail: "Access your oncology training programme", mark: "01" },
  { id: "Professor", title: "Professor", detail: "Teach, upload lectures and assess learners", mark: "02" },
  { id: "Government", title: "Government", detail: "Monitor programme progress and outcomes", mark: "03" },
  { id: "Administrator", title: "Administrator", detail: "Manage users, programmes and platform settings", mark: "04" },
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
      setMessage("Enter your email address and password to continue.");
      return;
    }
    setMessage("This is currently a preview sign-in. Secure account authentication has not yet been connected.");
    window.location.href = `/dashboard?role=${encodeURIComponent(role)}&track=${encodeURIComponent(track)}&preview=1`;
  }

  return (
    <main className="min-h-screen bg-[#f4f6f0] text-[#183320]">
      <header className="border-b border-[#e2e8df] bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="https://durckheim.com" className="flex items-center gap-3" aria-label="Durckheim AB home">
            <img src="/durckheim-logo.png" alt="Durckheim AB" className="h-12 w-12 rounded-full object-cover" />
            <span className="leading-tight">
              <strong className="block text-sm tracking-[0.2em] text-[#123f24]">DURCKHEIM</strong>
              <span className="text-[9px] tracking-[0.22em] text-[#718071]">ONCOLOGY ACADEMY</span>
            </span>
          </a>
          <div className="flex items-center gap-4">
            <label className="sr-only" htmlFor="language">Language</label>
            <select id="language" value={language} onChange={e => setLanguage(e.target.value)} className="rounded-lg border border-[#dce4d8] bg-white px-3 py-2 text-sm">
              {["English", "Swedish", "French", "Arabic", "Spanish"].map(item => <option key={item}>{item}</option>)}
            </select>
            <a href="https://durckheim.com" className="hidden text-sm text-[#55704f] sm:inline">Durckheim AB ↗</a>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <section className="flex flex-col justify-center">
          <p className="mb-4 text-xs font-bold tracking-[0.24em] text-[#6c8d28]">SCANDINAVIAN QUALITY IN ONCOLOGY EDUCATION</p>
          <h1 className="max-w-2xl font-serif text-4xl leading-tight text-[#123f24] sm:text-5xl">Building the next generation of oncology professionals.</h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#657367]">A structured digital learning environment connecting doctors, nurses, professors and institutional partners through high-quality oncology education.</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-[#dfe7d9] bg-white p-5 shadow-sm">
              <span className="text-xs font-bold tracking-widest text-[#78983b]">DOCTOR PROGRAMME</span>
              <h2 className="mt-2 font-serif text-2xl text-[#183c27]">5-year pathway</h2>
              <p className="mt-2 text-sm leading-6 text-[#718071]">Oncology residency covering medical oncology, radiation oncology, multidisciplinary care, research and clinical competencies.</p>
            </article>
            <article className="rounded-2xl border border-[#dfe7d9] bg-white p-5 shadow-sm">
              <span className="text-xs font-bold tracking-widest text-[#78983b]">NURSING PROGRAMME</span>
              <h2 className="mt-2 font-serif text-2xl text-[#183c27]">2-year pathway</h2>
              <p className="mt-2 text-sm leading-6 text-[#718071]">Specialist oncology nursing education in treatment safety, symptom management, radiotherapy nursing and supportive care.</p>
            </article>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#7b887b]">
            <span>Structured curricula</span><span>Faculty-led teaching</span><span>Competency-based learning</span><span>Multilingual platform</span>
          </div>
        </section>

        <section className="rounded-3xl border border-[#dfe7d9] bg-white p-6 shadow-[0_20px_60px_rgba(22,57,31,0.08)] sm:p-8">
          <div className="mb-6">
            <p className="text-xs font-bold tracking-[0.2em] text-[#78983b]">ACADEMY PORTAL</p>
            <h2 className="mt-2 font-serif text-3xl text-[#123f24]">Sign in to your account</h2>
            <p className="mt-2 text-sm text-[#7a887b]">Choose your access area to continue.</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {portals.map(portal => (
              <button key={portal.id} type="button" onClick={() => setRole(portal.id)} aria-pressed={role === portal.id}
                className={`rounded-xl border p-4 text-left transition ${role === portal.id ? "border-[#6f982d] bg-[#f1f6e9] ring-1 ring-[#6f982d]" : "border-[#e3e9df] bg-white hover:border-[#9bb477]"}`}>
                <span className="text-[10px] font-bold tracking-widest text-[#8aa05e]">{portal.mark}</span>
                <strong className="mt-2 block text-sm text-[#183c27]">{portal.title}</strong>
                <span className="mt-1 block text-xs leading-5 text-[#788579]">{portal.detail}</span>
              </button>
            ))}
          </div>

          {role === "Learner" && (
            <div className="mt-5">
              <p className="mb-2 text-xs font-bold tracking-widest text-[#687c61]">SELECT YOUR LEARNING PATHWAY</p>
              <div className="grid grid-cols-2 gap-3">
                {["Doctor", "Nurse"].map(item => (
                  <button key={item} type="button" onClick={() => setTrack(item)} aria-pressed={track === item}
                    className={`rounded-lg border px-4 py-3 text-sm font-semibold ${track === item ? "border-[#6f982d] bg-[#f1f6e9] text-[#315d27]" : "border-[#e3e9df] text-[#718071]"}`}>
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          <form onSubmit={handleSignIn} className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-[#536553]">Email address</label>
              <input id="email" type="email" autoComplete="username" required value={email} onChange={e => setEmail(e.target.value)} placeholder="name@institution.org" className="w-full rounded-lg border border-[#dfe6dc] bg-[#fbfcfa] px-4 py-3 text-sm outline-none focus:border-[#779b38]" />
            </div>
            <div>
              <label htmlFor="password" className="mb-1.5 block text-xs font-semibold text-[#536553]">Password</label>
              <input id="password" type="password" autoComplete="current-password" required value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" className="w-full rounded-lg border border-[#dfe6dc] bg-[#fbfcfa] px-4 py-3 text-sm outline-none focus:border-[#779b38]" />
            </div>
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-[#718071]"><input type="checkbox" className="accent-[#527d29]" /> Remember me</label>
              <button type="button" onClick={() => setMessage("Please contact the Academy administrator to reset your password.")} className="font-semibold text-[#63852d]">Forgot password?</button>
            </div>
            <button type="submit" className="w-full rounded-lg bg-[#174a29] px-5 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-[#25683b]">Sign in</button>
            {message && <p role="status" className="rounded-lg bg-[#fff8e8] p-3 text-xs leading-5 text-[#805f23]">{message}</p>}
          </form>
          <div className="mt-5 rounded-lg bg-[#f5f7f2] p-3 text-[11px] leading-5 text-[#788579]">
            <strong className="text-[#52694c]">Platform notice:</strong> The login screen and role selection have been restored. Secure account verification, password recovery and face-recognition authentication still require backend configuration; this deployment currently provides a dashboard preview, not verified account access.
          </div>
          <p className="mt-6 text-center text-xs text-[#8a9588]">© 2026 Durckheim AB · All rights reserved</p>
        </section>
      </div>
    </main>
  );
}
