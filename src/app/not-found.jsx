import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";
import GoBackPreviousPage from "@/components/ui/GoBackPreviousPage";

const NotFoundPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 px-6 py-12">
      {/* Background Decorations */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl" />

      <section className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        {/* 404 Illustration */}
        <div className="mb-6 flex h-44 w-44 items-center justify-center rounded-full bg-blue-100/70 shadow-inner sm:h-52 sm:w-52">
          <span className="text-7xl" role="img" aria-label="Lost astronaut">
            🧑‍🚀
          </span>
        </div>

        {/* Error Code */}
        <p className="mb-2 text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
          Oops! Something went wrong
        </p>

        <h1 className="text-8xl font-black tracking-tighter text-slate-900">
          404
        </h1>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
          Page Not Found
        </h2>

        <p className="mt-5 max-w-md text-base leading-7 text-slate-500 sm:text-lg">
          The page you're looking for seems to have wandered off into space.
          Let's get you back on track!
        </p>

        {/* Navigation */}
        <div className="mt-8 flex flex-col items-center gap-5">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
          >
            <Home size={20} />
            Go Back Home
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <GoBackPreviousPage />
        </div>

        {/* Footer */}
        <div className="mt-14 flex items-center gap-2 text-xs font-medium tracking-wide text-slate-400">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          LOST IN SPACE? WE'VE GOT YOU.
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
