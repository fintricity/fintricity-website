"use client"

import { Button } from "@/components/button"

export default function DebugSentry() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-24 bg-white">
      <h1 className="text-4xl font-bold text-fintricity-navy mb-8">Sentry Debug Page</h1>
      <p className="text-lg text-fintricity-charcoal mb-12 text-center max-w-xl">
        Use this page to verify that Sentry is correctly integrated and capturing errors. 
        Note: You must have a valid SENTRY_DSN configured in your environment.
      </p>
      
      <Button 
        variant="cyan"
        onClick={() => {
          throw new Error("Fintricity Sentry Test Error: " + new Date().toISOString());
        }}
      >
        Trigger Frontend Error
      </Button>
      
      <p className="mt-8 text-sm text-gray-400">
        Check your Sentry dashboard after clicking the button above.
      </p>
    </div>
  )
}
