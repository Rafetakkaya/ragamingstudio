"use client";

import React from "react";
import { Mail, Gamepad2, Info, ChevronRight, Apple } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const game = String(data.get("game") || "");
    const message = String(data.get("message") || "");

    const subject = encodeURIComponent(`Support Request - ${game}`);

    const body = encodeURIComponent(
      `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Game: ${game}\n\n` +
        `Message:\n${message}`,
    );

    window.location.href = `mailto:rrafetakkaya@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-8 h-8 text-indigo-400" />
            <span className="text-xl font-bold tracking-wider text-white">
              RA GAMING<span className="text-indigo-400">.</span>
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#games" className="hover:text-white transition-colors">
              Games
            </a>
            <a href="#support" className="hover:text-white transition-colors">
              Support
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-20 pb-32 text-center md:text-left md:flex items-center gap-12">
          {/* Sol Taraf: Yazılar */}
          <div className="flex-1 space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/50 border border-slate-800 text-xs font-medium text-indigo-300 mb-4">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Crafting Mobile Experiences
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
              Play.
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">
                Survive.
              </span>
              <br />
              Conquer.
            </h1>

            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Independent game studio dedicated to creating fast-paced,
              action-packed mobile experiences for players worldwide.
            </p>
          </div>

          {/* Sağ Taraf: Şık Grafik (Mobilde gizli, masaüstünde görünür) */}
          <div className="hidden md:flex flex-1 justify-center relative z-10 mt-12 md:mt-0">
            {/* Arka plan parlaması */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/30 blur-[80px] rounded-full pointer-events-none" />

            {/* Süzülen Kart */}
            <div className="relative w-full max-w-md aspect-square rounded-[40px] bg-linear-to-br from-indigo-950/40 to-slate-900/80 border border-slate-700/50 backdrop-blur-xl shadow-2xl flex items-center justify-center p-12 overflow-hidden animate-[bounce_5s_infinite_alternate]">
              {/* CULL Oyun İkonu (public klasöründen) */}
              <Image
                width={100}
                height={100}
                src="/ragamingstudio/knight_icon_512x512.png"
                alt="CULL Game Icon"
                className="w-full h-full object-contain rounded-3xl shadow-[0_0_50px_rgba(129,140,248,0.3)] z-10 relative"
              />

              {/* Alt Köşe Rozet */}
              <div className="absolute bottom-6 right-6 bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-700/50 backdrop-blur-md z-10 shadow-lg">
                <span className="text-sm font-bold text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  CULL v1.0
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CULL Game Showcase */}
        <section
          id="games"
          className="container mx-auto px-6 py-24 border-t border-slate-800/50"
        >
          <div className="flex flex-col md:flex-row items-center gap-16 bg-slate-900/30 p-8 md:p-12 rounded-3xl border border-slate-800/50 backdrop-blur-sm">
            <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-linear-to-br from-indigo-900/50 to-slate-900 flex items-center justify-center border border-slate-700/50 relative overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80')",
                }}
              />
              <Gamepad2 className="w-24 h-24 text-indigo-300/50 drop-shadow-2xl z-10" />
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="text-4xl font-bold text-white">CULL</h2>
                <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold tracking-widest uppercase">
                  In Review
                </span>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed">
                An indie single-player roguelike survival action game. Fight
                endless hordes, collect powerful upgrades, and see how long you
                can survive the ultimate challenge.
              </p>

              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  No Account Required
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Fully Offline Gameplay
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Intense Roguelike Mechanics
                </li>
              </ul>

              <div className="pt-6">
                <button
                  type="button"
                  disabled
                  className="group relative inline-flex items-center gap-3 bg-slate-800 text-slate-500 px-6 py-4 rounded-xl font-medium cursor-not-allowed border border-slate-700 w-full md:w-auto justify-center"
                >
                  <Apple className="w-6 h-6" />
                  <div className="text-left flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider leading-none">
                      Coming Soon on the
                    </span>
                    <span className="text-lg leading-none font-semibold text-slate-400">
                      App Store
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section id="support" className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl font-bold text-white">Need Support?</h2>

              <p className="text-slate-400">
                Experiencing issues or have feedback for our games? We&apos;re
                here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-2 space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center shrink-0 border border-indigo-500/20">
                    <Mail className="w-6 h-6 text-indigo-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-sm text-slate-400 mb-2">
                      For direct support inquiries.
                    </p>
                    <a
                      href="mailto:rrafetakkaya@gmail.com"
                      className="text-indigo-400 hover:text-indigo-300 font-medium text-sm transition-colors"
                    >
                      rrafetakkaya@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <Info className="w-6 h-6 text-slate-400" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white mb-1">
                      App Review Notice
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      If you are an Apple Reviewer experiencing issues, please
                      use the Resolution Center in App Store Connect for
                      expedited assistance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Support Form */}
              <div className="md:col-span-3 bg-slate-900/50 p-8 rounded-3xl border border-slate-800">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="support-name"
                        className="text-xs font-medium text-slate-400 ml-1"
                      >
                        Name
                      </label>
                      <input
                        id="support-name"
                        name="name"
                        required
                        type="text"
                        autoComplete="name"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="support-email"
                        className="text-xs font-medium text-slate-400 ml-1"
                      >
                        Email
                      </label>
                      <input
                        id="support-email"
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="support-game"
                      className="text-xs font-medium text-slate-400 ml-1"
                    >
                      Game
                    </label>
                    <select
                      id="support-game"
                      name="game"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-all appearance-none cursor-pointer"
                    >
                      <option value="CULL - Roguelike Survival">
                        CULL - Roguelike Survival
                      </option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="support-message"
                      className="text-xs font-medium text-slate-400 ml-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="support-message"
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600 resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-slate-500 text-center">
                    Your email application will open to send your message.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800/50 mt-12">
          <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2026 RA Gaming Studios. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <a
                href="mailto:rrafetakkaya@gmail.com?subject=Privacy%20Policy%20Inquiry"
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="mailto:rrafetakkaya@gmail.com?subject=Terms%20of%20Service%20Inquiry"
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
