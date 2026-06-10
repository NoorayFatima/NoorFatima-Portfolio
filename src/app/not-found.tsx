import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="theme-home min-h-screen bg-background text-on-surface">
      <Navbar variant="standard" />
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-gutter pt-32 text-center">
        <h1 className="mb-4 font-display-lg text-display-lg-mobile text-on-surface md:text-display-lg">
          Page not found
        </h1>
        <p className="mb-8 max-w-md font-body-lg text-body-lg text-on-surface-variant">
          The page you are looking for does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="rounded-lg bg-primary-container px-8 py-4 font-label-md text-label-md text-on-primary-container transition-all hover:brightness-110"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
