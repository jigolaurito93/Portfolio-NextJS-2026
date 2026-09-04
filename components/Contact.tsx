'use client';

import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const inputClass =
  'rounded-xl border border-primary/15 bg-white/[0.04] px-4 py-3 text-primary-light outline-none transition placeholder:text-primary-light/40 focus:border-secondary/60 focus:ring-1 focus:ring-secondary/40';

const Contact = () => {
  const [state, handleSubmit] = useForm('xrgnlooy');

  return (
    <section
      id="contact"
      className="scroll-mt-28 px-6 py-24 md:px-12 lg:px-24 xl:px-40"
    >
      <SectionHeading index="05" title="Let's Talk" align="center" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass mx-auto max-w-3xl p-6 md:p-10"
      >
        {state.succeeded ? (
          <div className="py-10 text-center">
            <p className="font-display text-2xl font-semibold text-primary">
              Message received.
            </p>
            <p className="mt-3 text-secondary">
              Thanks for reaching out — I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xrgnlooy"
            onSubmit={handleSubmit}
            method="POST"
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            <input
              type="text"
              name="firstName"
              required
              placeholder="First Name"
              className={inputClass}
            />
            <input
              type="text"
              name="lastName"
              required
              placeholder="Last Name"
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className={`${inputClass} md:col-span-2`}
            />
            <textarea
              name="message"
              id="message"
              required
              placeholder="Your Message"
              rows={5}
              className={`${inputClass} md:col-span-2 resize-none`}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                disabled={state.submitting}
                className="rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-tertiary transition hover:bg-primary-light disabled:opacity-60"
              >
                {state.submitting ? 'Sending…' : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};

export default Contact;
