import { FaGithub, FaLinkedin, FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useState, useRef, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({ state: "idle", text: "Ready." });
  const [toast, setToast] = useState({ show: false, text: "", ok: true });
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toastTimer = useRef(null);
  const MAX_CHARS = 500;

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "message" && value.length > MAX_CHARS) {
      newValue = value.slice(0, MAX_CHARS);
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));

    if (name === "message") {
      setCharCount(newValue.length);
    }
  };

  const showToast = (text, ok = true) => {
    setToast({ show: true, text, ok });
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => {
      setToast({ show: false, text: "", ok: true });
    }, 2600);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    const problems = [];
    if (!formData.name?.trim()) problems.push("Please enter your name.");
    if (!validateEmail(formData.email)) problems.push("Please enter a valid email.");
    if (!formData.subject?.trim() || formData.subject.trim().length < 3)
      problems.push("Subject must be at least 3 characters.");
    if (!formData.message?.trim() || formData.message.trim().length < 10)
      problems.push("Message must be at least 10 characters.");

    if (problems.length) {
      setStatus({ state: "err", text: problems[0] });
      showToast(problems[0], false);
      return;
    }

    // Simulate sending
    setIsSubmitting(true);
    setStatus({ state: "sending", text: "Sending…" });

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));

      // TODO: Replace with actual API call:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      setStatus({ state: "ok", text: "Sent! We'll reply soon." });
      showToast("Message sent — thank you!", true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setCharCount(0);
    } catch (err) {
      setStatus({ state: "err", text: "Something went wrong. Please try again." });
      showToast("Send failed — please try again.", false);
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <div
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#f8f7f5] to-[#ffffff] py-12 px-4"
    >
      {/* Animated background blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 -left-32 w-80 h-80 bg-gradient-to-br from-[#fe5617]/8 to-transparent rounded-full blur-3xl animate-float"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
        <div
          className="absolute bottom-32 -right-40 w-96 h-96 bg-gradient-to-br from-[#ff8c4a]/6 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDuration: "10s", animationDelay: "-2s" }}
        />
        <div
          className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-br from-[#fe5617]/5 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDuration: "12s", animationDelay: "-4s" }}
        />
      </div>

      {/* Grain overlay */}
      <div
        className="fixed inset-0 -z-10 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/></filter><rect width="160" height="160" filter="url(%23n)" opacity="0.25"/></svg>')`,
          mixBlendMode: "overlay",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(0, -20px) scale(1.04); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(10px) scale(0.99); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(35, 201, 255, 0); }
          50% { box-shadow: 0 0 0 10px rgba(35, 201, 255, 0.18); }
        }
        .animate-in { animation: slideIn 0.6s cubic-bezier(0.2, 0.9, 0.2, 1) forwards; }
        .animate-in-delay { animation-delay: 0.12s; }
        .animate-in-delay-2 { animation-delay: 0.24s; }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; transition: none !important; }
        }
      `}</style>

      <div className="relative z-10 max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-in">
          <p className="text-sm uppercase tracking-widest text-[#666666] mb-3">Get in Touch</p>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#fe5617] via-[#ff8c4a] to-[#fe5617] bg-clip-text text-transparent mb-4">
            Let's Build Something Great
          </h1>
          <p className="text-[#555555] text-lg max-w-2xl mx-auto">
            Have a question or want to collaborate? Send us a message and we'll get back to you within 1–2 business days.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Form Card - spans 2 cols on desktop */}
          <div className="lg:col-span-2 animate-in animate-in-delay">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#fe5617]/8 via-[#ff8c4a]/5 to-[#fe5617]/8 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-[#ffffff]/95 to-[#f8f7f5]/90 backdrop-blur-xl border border-[#e5e5e5] rounded-2xl p-8 shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#666666] mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jane Doe"
                        required
                        className="w-full bg-[#f8f7f5] border border-[#ddd] rounded-lg px-4 py-3 text-[#000] placeholder-[#999999] focus:outline-none focus:border-[#fe5617] focus:ring-2 focus:ring-[#fe5617]/15 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#666666] mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jane@company.com"
                        required
                        className="w-full bg-[#f8f7f5] border border-[#ddd] rounded-lg px-4 py-3 text-[#000] placeholder-[#999999] focus:outline-none focus:border-[#fe5617] focus:ring-2 focus:ring-[#fe5617]/15 transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#666666] mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry"
                      required
                      minLength="3"
                      className="w-full bg-[#f8f7f5] border border-[#ddd] rounded-lg px-4 py-3 text-[#000] placeholder-[#999999] focus:outline-none focus:border-[#fe5617] focus:ring-2 focus:ring-[#fe5617]/15 transition-all duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#666666] mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your idea…"
                      required
                      minLength="10"
                      rows="5"
                      className="w-full bg-[#f8f7f5] border border-[#ddd] rounded-lg px-4 py-3 text-[#000] placeholder-[#999999] focus:outline-none focus:border-[#fe5617] focus:ring-2 focus:ring-[#fe5617]/15 transition-all duration-200 resize-none"
                    />
                    <div className="flex justify-between items-center mt-2 text-xs text-[#666666]">
                      <span>{charCount < 10 ? "Minimum 10 characters." : "Looks good."}</span>
                      <span>
                        {charCount}/{MAX_CHARS}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative px-6 py-3 bg-gradient-to-r from-[#7c5cff] to-[#23c9ff] text-white font-semibold rounded-lg overflow-hidden group hover:shadow-lg hover:shadow-[#7c5cff]/50 disabled:opacity-50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0.5"
                    >
                      <span className="relative z-10">
                        {isSubmitting ? "Sending…" : "Send Message"}
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                    </button>

                    <div className="flex-1 text-xs text-[#666666]" role="status" aria-live="polite">
                      <span className="inline-flex items-center gap-2">
                        <span
                          className={`inline-block w-2 h-2 rounded-full ${
                            status.state === "sending"
                              ? "bg-[#fe5617] animate-pulse"
                              : status.state === "ok"
                              ? "bg-[#22c55e]"
                              : status.state === "err"
                              ? "bg-[#ef4444]"
                              : "bg-[#ddd]"
                          }`}
                        />
                        {status.text}
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="animate-in animate-in-delay-2 space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff8c4a]/8 via-transparent to-[#fe5617]/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gradient-to-br from-[#ffffff]/95 to-[#f8f7f5]/90 backdrop-blur-xl border border-[#e5e5e5] rounded-2xl p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-[#000] mb-6">Contact Details</h2>

                {/* Email */}
                <div className="space-y-4">
                  <div className="flex gap-3 p-3 rounded-lg border border-[#e5e5e5] hover:border-[#ddd] hover:bg-[#f8f7f5] transition-all cursor-pointer group/item">
                    <div className="w-9 h-9 rounded-lg bg-[#fe5617]/10 border border-[#fe5617]/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#fe5617]/15 transition-colors">
                      <FaEnvelope className="text-[#fe5617] text-sm" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#666666] mb-1">Email</p>
                      <p className="text-sm text-[#000] break-all">smithushan03@gmail.com</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3 p-3 rounded-lg border border-[#e5e5e5] hover:border-[#ddd] hover:bg-[#f8f7f5] transition-all cursor-pointer group/item">
                    <div className="w-9 h-9 rounded-lg bg-[#fe5617]/10 border border-[#fe5617]/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#fe5617]/15 transition-colors">
                      <FaPhoneAlt className="text-[#fe5617] text-sm" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#666666] mb-1">Phone</p>
                      <p className="text-sm text-[#000]">+94 775 742 738</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex gap-3 p-3 rounded-lg border border-[#e5e5e5] hover:border-[#ddd] hover:bg-[#f8f7f5] transition-all cursor-pointer group/item">
                    <div className="w-9 h-9 rounded-lg bg-[#fe5617]/10 border border-[#fe5617]/20 flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#fe5617]/15 transition-colors">
                      <FaLocationDot className="text-[#fe5617] text-sm" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#666666] mb-1">Location</p>
                      <p className="text-sm text-[#000]">Vavuniya, Sri Lanka</p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-6 border-t border-[#e5e5e5]">
                  <p className="text-xs uppercase tracking-wider text-[#666666] mb-4">Follow</p>
                  <div className="flex gap-3">
                    <a
                      href="https://github.com/mithushan03"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[#f8f7f5] border border-[#e5e5e5] flex items-center justify-center hover:bg-[#f0eeeb] hover:border-[#fe5617] transition-all duration-200 text-[#000] hover:text-[#fe5617]"
                    >
                      <FaGithub size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mithu03/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[#f8f7f5] border border-[#e5e5e5] flex items-center justify-center hover:bg-[#f0eeeb] hover:border-[#fe5617] transition-all duration-200 text-[#000] hover:text-[#fe5617]"
                    >
                      <FaLinkedin size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/mithushan_03/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-[#f8f7f5] border border-[#e5e5e5] flex items-center justify-center hover:bg-[#f0eeeb] hover:border-[#fe5617] transition-all duration-200 text-[#000] hover:text-[#fe5617]"
                    >
                      <FaInstagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <div
        className={`fixed bottom-5 left-1/2 -translate-x-1/2 px-4 py-3 rounded-full border backdrop-blur-md flex items-center gap-2 transition-all duration-300 pointer-events-none ${
          toast.show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        } ${
          toast.ok
            ? "bg-[#22c55e]/12 border-[#22c55e]/30 text-[#16a34a]"
            : "bg-[#ef4444]/12 border-[#ef4444]/30 text-[#dc2626]"
        }`}
        role="status"
        aria-live="polite"
      >
        <span className={`inline-block w-2 h-2 rounded-full ${toast.ok ? "bg-[#22c55e]" : "bg-[#ef4444]"}`} />
        {toast.text}
      </div>
    </div>
  );
};

export default Contact;
