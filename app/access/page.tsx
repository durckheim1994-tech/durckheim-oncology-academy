"use client";

import { FormEvent, useState } from "react";

export default function AcademyAccessPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setBusy(true);
    try {
      const response = await fetch("/api/access", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.error || "Access could not be verified.");
        setBusy(false);
        return;
      }
      const next = new URLSearchParams(window.location.search).get("next") || "/";
      window.location.assign(next.startsWith("/") && !next.startsWith("//") ? next : "/");
    } catch {
      setError("Connection problem. Please try again.");
      setBusy(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f6f3] px-5 py-12 text-[#173b2a]">
      <section className="w-full max-w-md rounded-2xl border border-[#e1e8df] bg-white p-8 shadow-xl sm:p-10">
        <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center">
          <img src="/durckheim-logo.webp" alt="Durckheim emblem" className="h-full w-full object-contain" />
        </div>
        <p className="text-center text-[10px] font-bold uppercase tracking-[0.24em] text-[#78964f]">Durckheim Oncology Academy</p>
        <h1 className="mt-3 text-center font-serif text-3xl">Private access</h1>
        <p className="mt-3 text-center text-sm leading-6 text-[#748176]">This Academy is restricted to authorised visitors. Enter the access password to continue.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="academy-password" className="mb-2 block text-xs font-semibold text-[#465c4b]">Access password</label>
            <input id="academy-password" type="password" autoComplete="current-password" required value={password} onChange={event => setPassword(event.target.value)} placeholder="Enter access password" className="w-full rounded-lg border border-[#dce4dc] bg-white px-4 py-3 text-sm outline-none focus:border-[#789b54] focus:ring-2 focus:ring-[#789b54]/15" />
          </div>
          {error && <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs text-red-700">{error}</p>}
          <button disabled={busy} type="submit" className="w-full rounded-lg bg-[#17452f] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#225c3e] disabled:cursor-wait disabled:opacity-60">{busy ? "Verifying…" : "Continue to Academy →"}</button>
        </form>
        <p className="mt-7 text-center text-[10px] text-[#9aa49a]">© 2026 Durckheim AB. All rights reserved.</p>
      </section>
    </main>
  );
}
