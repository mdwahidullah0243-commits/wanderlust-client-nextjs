"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw, Home, ArrowRight } from "lucide-react";
import Link from "next/link";

const ErrorPage = ({ error, reset }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6 py-12 text-white">
      {/* Background Effects */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-red-500/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <section className="relative z-10 w-full max-w-xl text-center">
        {/* Error Icon */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-red-400/20 bg-red-500/10 shadow-lg shadow-red-500/5">
          <AlertTriangle
            size={44}
            strokeWidth={1.5}
            className="text-red-400"
          />
        </div>

        {/* Error Label */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-400">
          Unexpected Error
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Something went
          <span className="mt-2 block bg-linear-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            wrong!
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-md text-base leading-7 text-slate-400 sm:text-lg">
          We're sorry, but something unexpected happened.
          Please try again or return to the homepage.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={() => reset?.()}
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <RefreshCw
              size={18}
              className="transition-transform duration-500 group-hover:rotate-180"
            />
            Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
          >
            <Home size={18} />
            Back to Home
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-sm text-slate-500">
            Don't worry — your journey doesn't end here.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;