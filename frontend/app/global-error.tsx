'use client'

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import { Button } from "@/components/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html>
      <body className="antialiased font-sans bg-white text-kendra-blue">
        <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
          <div className="mb-8">
            <img src="/logo.svg" alt="Kendra Labs" className="h-16 w-auto mx-auto" />
          </div>
          <h1 className="text-4xl font-bold mb-4">A critical system error occurred.</h1>
          <p className="text-xl text-gray-600 mb-12 max-w-lg">
            Our autonomous agents have been notified and are investigating the issue within the Kendra Fabric.
          </p>
          <Button 
            variant="plum" 
            size="lg"
            onClick={() => reset()}
          >
            Try to recover
          </Button>
        </div>
      </body>
    </html>
  );
}
