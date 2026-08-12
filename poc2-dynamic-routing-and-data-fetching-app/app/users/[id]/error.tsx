// app/users/[id]/error.tsx
'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an observability service (e.g., Sentry)
    console.error('Captured route error:', error);
  }, [error]);

  return (
    <main className="min-h-screen bg-gray-50 p-8 font-sans flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-sm border border-red-200 text-center max-w-md w-full">
        <div className="text-red-600 text-3xl mb-2">🚨</div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Something went wrong!</h2>
        <p className="text-sm text-gray-600 mb-6 bg-red-50 p-3 rounded font-mono text-left break-words">
          {error.message || 'An unexpected error occurred while loading user data.'}
        </p>

        <div className="flex gap-3 justify-center">
          {/* Re-executes page.tsx on the server */}
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-red-600 text-white font-medium text-sm rounded-lg hover:bg-red-700 transition"
          >
            Try Again
          </button>
          
          <Link
            href="/users"
            className="px-4 py-2 bg-gray-200 text-gray-800 font-medium text-sm rounded-lg hover:bg-gray-300 transition"
          >
            Back to Directory
          </Link>
        </div>
      </div>
    </main>
  );
}