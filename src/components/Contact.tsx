import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { motion } from 'framer-motion'

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
})

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const formik = useFormik({
    initialValues: { name: '', email: '', message: '' },
    validationSchema,
    onSubmit: async (values) => {
      try {
        // Placeholder: In production, use EmailJS or a backend API
        console.log('Form submitted:', values)
        setSubmitStatus('success')
        formik.resetForm()
      } catch {
        setSubmitStatus('error')
      }
    },
  })

  return (
    <section id="contact" className="py-24 bg-gray-900" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Hire Me
            </h2>
            <p className="text-gray-400 mb-8">
              Ready to bring your vision to life? I&apos;m available for new projects, 
              full-time roles, and creative partnerships. Let&apos;s talk.
            </p>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <span className="text-primary-400">📍</span>
                <span>Denver, Colorado 80110</span>
              </div>
              <a href="mailto:gurungdava@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-primary-400 transition-colors">
                <span className="text-primary-400">✉️</span>
                gurungdava@gmail.com
              </a>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:border-primary-500/50 transition-colors" aria-label="LinkedIn">
                <span className="text-gray-300">in</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:border-primary-500/50 transition-colors" aria-label="Twitter">
                <span className="text-gray-300">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 hover:border-primary-500/50 transition-colors" aria-label="Instagram">
                <span className="text-gray-300">📷</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={formik.handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your name"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-sm text-red-400">{formik.errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="your@email.com"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-400">{formik.errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                placeholder="Tell me about your project or role..."
              />
              {formik.touched.message && formik.errors.message && (
                <p className="mt-1 text-sm text-red-400">{formik.errors.message}</p>
              )}
            </div>

            {submitStatus === 'success' && (
              <p className="text-green-400">Thank you! I&apos;ll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full px-6 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-500 transition-colors disabled:opacity-50"
            >
              Send Inquiry
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
