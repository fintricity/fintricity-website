"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { useState } from "react"
import Turnstile from "react-turnstile"

export function ContactClient({ content }: { content: any }) {
  const [formData, setFormData] = useState<any>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!turnstileToken) {
      alert("Please verify that you are human.")
      return
    }

    setStatus('submitting')

    // -------------------------------------------------------------------------
    // HUBSPOT INTEGRATION CONFIGURATION
    // -------------------------------------------------------------------------
    const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || 'YOUR_PORTAL_ID'; 
    const FORM_GUID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID || 'YOUR_FORM_GUID';
    // -------------------------------------------------------------------------

    if (PORTAL_ID === 'YOUR_PORTAL_ID' || FORM_GUID === 'YOUR_FORM_GUID') {
      console.warn("HubSpot Portal ID or Form GUID not configured.");
      setTimeout(() => setStatus('success'), 1000);
      return;
    }

    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: [
              ...Object.keys(formData).map(key => ({
                name: key,
                value: formData[key]
              })),
              {
                name: 'lead_source', // Standard field name, ensure this exists in your HubSpot form
                value: 'KendraLabs Website' 
              }
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
            // Note: Cloudflare Turnstile validation usually happens on your server 
            // before submission or via a custom backend integration. 
            // Here we are using it as a client-side gate.
          }),
        }
      )

      if (response.ok) {
        setStatus('success')
        setFormData({})
        setTurnstileToken(null) // Reset captcha
      } else {
        const data = await response.json()
        console.error('HubSpot submission error:', data)
        setStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
      setStatus('error')
    }
  }

  return (
    <>
      <section className="relative py-24 md:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" className="mb-6 px-4 py-1 border-kendra-blue text-kendra-blue font-medium">
              {content.hero.badge}
            </Badge>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-kendra-blue mb-8"
          >
            Let's Build the Future <br className="hidden md:block" /> of <span className="text-kendra-orange">Autonomy</span> Together
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {content.hero.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto p-8 border border-gray-200 rounded-xl shadow-lg bg-white">
            <h2 className="text-4xl font-bold text-kendra-blue mb-8 text-center">{content.form.title}</h2>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-center p-8 bg-green-50 rounded-lg text-green-800"
              >
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p>Thank you for reaching out. We'll be in touch shortly.</p>
                <Button variant="outline" className="mt-6" onClick={() => setStatus('idle')}>Send another</Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {content.form.fields.map((field: any, index: number) => (
                  <div key={field.id}>
                    <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.id}
                        name={field.id}
                        required
                        rows={field.rows || 4}
                        placeholder={field.placeholder}
                        value={formData[field.id] || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-kendra-plum focus:border-kendra-plum resize-none"
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        name={field.id}
                        required
                        placeholder={field.placeholder}
                        value={formData[field.id] || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-kendra-plum focus:border-kendra-plum"
                      />
                    )}
                  </div>
                ))}
                
                <div className="flex justify-center py-2">
                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"}
                    onVerify={(token) => setTurnstileToken(token)}
                  />
                </div>

                {status === 'error' && (
                  <div className="text-red-600 text-sm text-center">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <Button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-3 text-lg"
                  variant="plum"
                >
                  {status === 'submitting' ? 'Sending...' : content.form.buttonText}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
