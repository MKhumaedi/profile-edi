import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';
import { portfolioService } from '../../../services';

export const Contact: React.FC = () => {
  const personalInfo = portfolioService.getPersonalInfo();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Project Proposal',
    budget: '$5k - $15k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: 'Project Proposal',
        budget: '$5k - $15k',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-section-gap relative overflow-hidden bg-transparent">
      {/* ANIMATED WAVE GRADIENT BACKGROUND */}
      <div className="contact-wave-background">
        <div className="contact-wave-mesh" />
        <svg
          className="contact-wave-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
        >
          <defs>
            <linearGradient id="contact-wave-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#b8ff2c" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#476800" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#191d11" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="contact-wave-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#476800" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#b8ff2c" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M-100 200 C 400 50, 800 350, 1300 150 S 1700 300, 2200 200"
            stroke="url(#contact-wave-grad-1)"
            strokeWidth="2"
            fill="none"
            className="contact-wave-anim-1"
          />
          <path
            d="M-50 300 C 500 150, 900 400, 1400 200 S 1800 350, 2300 250"
            stroke="url(#contact-wave-grad-2)"
            strokeWidth="1.5"
            strokeDasharray="10 8"
            fill="none"
            className="contact-wave-anim-2"
          />
        </svg>
      </div>

      <div className="max-w-max-width mx-auto px-container-padding relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ecf0db] text-[#476800] text-xs font-bold tracking-wider uppercase mb-3 border border-[#c2caae]/60">
            Let's Connect
          </div>
          <h2 className="text-headline-section text-[#191d11] font-bold tracking-tight">
            Start a Conversation
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT INFO SIDE */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[#191d11] text-[#f7fce6] p-8 rounded-3xl border border-[#c2caae]/30 shadow-xl">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Have a project in mind? <br /> Let's discuss details.
              </h3>
              <p className="text-body-md text-gray-300 text-sm mb-8 leading-relaxed">
                Whether you're looking to build a brand new full-stack product, improve your frontend architecture, or hire a lead developer, I'm always open to discussing new opportunities.
              </p>

              {/* CONTACT DETAILS */}
              <div className="space-y-4 mb-8">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#2d3224] hover:bg-[#476800] transition-colors border border-white/10 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#b8ff2c] text-[#191d11] flex items-center justify-center font-bold">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Direct Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#b8ff2c] transition-colors">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#2d3224] border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#b8ff2c] text-[#191d11] flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Location & Timezone</div>
                    <div className="text-sm font-bold text-white">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL LINKS */}
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Connect Online</div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#2d3224] text-white hover:bg-[#b8ff2c] hover:text-[#191d11] transition-all border border-white/10"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#2d3224] text-white hover:bg-[#b8ff2c] hover:text-[#191d11] transition-all border border-white/10"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-[#2d3224] text-white hover:bg-[#b8ff2c] hover:text-[#191d11] transition-all border border-white/10"
                    aria-label="Twitter Profile"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM SIDE */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-[#c2caae]/50 shadow-xs">
              {submitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#b8ff2c] text-[#191d11] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#191d11] mb-2">Message Sent Successfully!</h3>
                  <p className="text-body-md text-[#424934] max-w-md mb-6">
                    Thank you for reaching out, Khumaedi will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#191d11] text-[#b8ff2c] font-bold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#191d11] uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#f1f6e1]/60 text-[#191d11] text-sm border border-[#c2caae]/50 focus:outline-none focus:ring-2 focus:ring-[#476800]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#191d11] uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#f1f6e1]/60 text-[#191d11] text-sm border border-[#c2caae]/50 focus:outline-none focus:ring-2 focus:ring-[#476800]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#191d11] uppercase tracking-wider mb-2">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#f1f6e1]/60 text-[#191d11] text-sm border border-[#c2caae]/50 focus:outline-none focus:ring-2 focus:ring-[#476800]"
                      >
                        <option value="Project Proposal">Project Proposal</option>
                        <option value="Full-time Role">Full-time Hiring</option>
                        <option value="Consulting">Technical Consulting</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#191d11] uppercase tracking-wider mb-2">
                        Project Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-[#f1f6e1]/60 text-[#191d11] text-sm border border-[#c2caae]/50 focus:outline-none focus:ring-2 focus:ring-[#476800]"
                      >
                        <option value="< $5k">&lt; $5,000</option>
                        <option value="$5k - $15k">$5,000 - $15,000</option>
                        <option value="$15k+">$15,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#191d11] uppercase tracking-wider mb-2">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project, timeline, and tech requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#f1f6e1]/60 text-[#191d11] text-sm border border-[#c2caae]/50 focus:outline-none focus:ring-2 focus:ring-[#476800] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl bg-[#191d11] text-[#b8ff2c] hover:bg-[#476800] hover:text-white font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    {loading ? (
                      <span>Transmitting Message...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
