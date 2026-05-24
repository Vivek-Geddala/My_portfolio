import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiSendPlaneFill, RiLoader4Line, RiCheckLine, RiCloseLine, RiMailLine, RiUserLine, RiMessage2Line } from 'react-icons/ri';

function Toast({ toast }) {
  if (!toast.message) return null;
  const isSuccess = toast.type === 'success';
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
        className="fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-xl"
        style={{
          background: isSuccess
            ? 'linear-gradient(135deg,rgba(16,185,129,0.9),rgba(6,182,212,0.9))'
            : 'linear-gradient(135deg,rgba(239,68,68,0.9),rgba(168,85,247,0.9))',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        {isSuccess ? <RiCheckLine className="text-white text-xl" /> : <RiCloseLine className="text-white text-xl" />}
        <p className="text-white font-semibold text-sm">{toast.message}</p>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ type: '', message: '' });

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast({ type: '', message: '' }), 4000);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      showToast('success', 'Message sent successfully! I\'ll get back to you soon.');
      setForm({ name: '', email: '', message: '' });
    } catch {
      showToast('error', 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none focus:border-[#00d4ff]/60 focus:ring-1 focus:ring-[#00d4ff]/30 transition-all';

  return (
    <>
      <Toast toast={toast} />
      <section id="contact" className="section-padding">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-[#00d4ff] text-sm tracking-widest uppercase font-mono mb-2">Let's connect</p>
            <h2 className="text-4xl font-bold gradient-text" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Contact Me
            </h2>
            <p className="text-white/50 mt-3 max-w-md mx-auto text-sm">
              Have an opportunity, project idea, or just want to say hi? Drop me a message!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              {[
                { icon: <RiMailLine />, label: 'Email', value: 'vivekgeddala@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=vivekgeddala@gmail.com' },
                { icon: <RiUserLine />, label: 'LinkedIn', value: 'linkedin.com/in/vivek-geddala', href: 'http://www.linkedin.com/in/vivek-geddala' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="glass p-5 rounded-2xl flex items-center gap-4 hover:border-[#00d4ff]/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl text-[#00d4ff] group-hover:scale-110 transition-transform"
                    style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/40 text-xs">{item.label}</p>
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  </div>
                </a>
              ))}

              <div className="glass p-6 rounded-2xl">
                <p className="text-[#a855f7] font-semibold mb-2">📍 Location</p>
                <p className="text-white/70 text-sm">Vadodara, Gujarat, India</p>
                <p className="text-white/40 text-xs mt-1">Open to remote and on-site opportunities</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="glass p-8 rounded-2xl flex flex-col gap-5"
            >
              <div>
                <label className="text-xs text-white/50 mb-1 flex items-center gap-1"><RiUserLine /> Name</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange}
                  placeholder="Your full name" required className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs text-white/50 mb-1 flex items-center gap-1"><RiMailLine /> Email</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="your@email.com" required className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs text-white/50 mb-1 flex items-center gap-1"><RiMessage2Line /> Message</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange}
                  placeholder="Your inquiry or message..." required rows={5}
                  className={inputClass + ' resize-none'}
                />
              </div>

              <button
                type="submit"
                 disabled={loading}
                className="flex items-center justify-center gap-3 py-3 px-6 rounded-full font-semibold text-[#030014] glow-box-blue hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                style={{ background: 'linear-gradient(135deg,#00d4ff,#a855f7)' }}
              >
                {loading ? (
                  <><RiLoader4Line className="animate-spin" /> Sending…</>
                ) : (
                  <><RiSendPlaneFill /> Send Message</>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}
