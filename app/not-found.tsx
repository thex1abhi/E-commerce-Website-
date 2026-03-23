import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg space-y-6">

        {/* 404 */}
        <h1 className="text-7xl font-bold text-neutral-900">
          404
        </h1>

        {/* Message */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-neutral-800">
            Page Not Found
          </h2>
          <p className="text-neutral-500">
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-700 transition"
          >
            Go Home
          </Link>

          <Link
            href="/shop"
            className="border border-neutral-300 px-6 py-3 rounded-lg font-medium hover:bg-neutral-50 transition"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Extra info */}
        <p className="text-sm text-neutral-400 pt-4">
          Error Code: 404 — Page Not Found
        </p>
      </div>
    </section>
  );
}