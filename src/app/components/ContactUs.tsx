import { motion } from "motion/react";
import {
  Send,
  Mail,
  User,
  Briefcase,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader,
} from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import emailjs from "@emailjs/browser";

// ─── EmailJS Configuration ────────────────────────────────────────────────────
// Replace these with your actual EmailJS credentials:
//   1. Go to https://www.emailjs.com/ and sign up / log in
//   2. Create an Email Service  → copy the Service ID
//   3. Create an Email Template → copy the Template ID
//      Template variables used: {{from_name}}, {{from_email}}, {{project_type}}, {{message}}
//   4. Go to Account → API Keys  → copy the Public Key
const EMAILJS_SERVICE_ID = "service_vc07rp8"; // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = "template_cr9gr4u"; // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY = "1SJeVcL5qPCi5BFKE"; // e.g. 'abcDEF123456'
// ─────────────────────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactUs() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");
      // Reset form after success
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    // Reset status when user starts editing again after a result
    if (submitStatus !== "idle" && submitStatus !== "loading") {
      setSubmitStatus("idle");
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const projectTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "SEO Optimization",
    "Hosting & DevOps",
    "Full-Stack Solution",
    "Other",
  ];

  const isLoading = submitStatus === "loading";

  return (
    <section
      className={`py-24 relative overflow-hidden transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950"
          : "bg-gradient-to-b from-gray-50 via-indigo-50 to-gray-50"
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className={`absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
            theme === "dark" ? "bg-indigo-600/10" : "bg-indigo-400/20"
          }`}
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl ${
            theme === "dark" ? "bg-violet-600/10" : "bg-violet-400/20"
          }`}
          animate={{ scale: [1.2, 1, 1.2], x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* 3D Floating shapes */}
      <motion.div
        className={`absolute top-20 right-20 w-40 h-40 rounded-[30px] border hidden lg:block ${
          theme === "dark"
            ? "bg-gradient-to-br from-indigo-500/5 to-violet-500/5 backdrop-blur-xl border-indigo-500/10"
            : "bg-gradient-to-br from-indigo-200/30 to-violet-200/30 backdrop-blur-xl border-indigo-300/30"
        }`}
        animate={{ y: [0, -25, 0], rotateZ: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute bottom-40 left-20 w-32 h-32 rounded-[25px] border hidden lg:block ${
          theme === "dark"
            ? "bg-gradient-to-tr from-violet-500/5 to-indigo-500/5 backdrop-blur-xl border-violet-500/10"
            : "bg-gradient-to-tr from-violet-200/30 to-indigo-200/30 backdrop-blur-xl border-violet-300/30"
        }`}
        animate={{ y: [0, 20, 0], rotateZ: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-[linear-gradient(to_right,#4f46e508_1px,transparent_1px),linear-gradient(to_bottom,#4f46e508_1px,transparent_1px)]"
            : "bg-[linear-gradient(to_right,#4f46e515_1px,transparent_1px),linear-gradient(to_bottom,#4f46e515_1px,transparent_1px)]"
        } bg-[size:4rem_4rem]`}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div
            className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-xl border mb-4 ${
              theme === "dark"
                ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                : "bg-indigo-100 border-indigo-200 text-indigo-700"
            }`}
          >
            <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-semibold">
              Get in Touch
            </span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4 transition-colors duration-500 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Start Your{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Project
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 transition-colors duration-500 ${
              theme === "dark" ? "text-slate-400" : "text-gray-600"
            }`}
          >
            Tell us about your project and we'll get back to you within 24 hours
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 md:p-12 border shadow-2xl transition-all duration-500 ${
            theme === "dark"
              ? "bg-slate-800/40 backdrop-blur-xl border-slate-700/50 shadow-indigo-500/10"
              : "bg-white/80 backdrop-blur-xl border-gray-200 shadow-indigo-200/30"
          }`}
        >
          {/* ── Success banner ── */}
          {submitStatus === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-3 p-4 rounded-2xl mb-6 ${
                theme === "dark"
                  ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  : "bg-emerald-50 border border-emerald-200 text-emerald-700"
              }`}
            >
              <CheckCircle className="w-5 h-5 shrink-0" />
              <div>
                <p className="font-semibold">Message sent successfully!</p>
                <p className="text-sm opacity-80">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            </motion.div>
          )}

          {/* ── Error banner ── */}
          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-3 p-4 rounded-2xl mb-6 ${
                theme === "dark"
                  ? "bg-red-500/10 border border-red-500/20 text-red-400"
                  : "bg-red-50 border border-red-200 text-red-700"
              }`}
            >
              <AlertCircle className="w-5 h-5 shrink-0" />
              <div>
                <p className="font-semibold">Failed to send message</p>
                <p className="text-sm opacity-80">{errorMessage}</p>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className={`flex items-center gap-2 mb-2 font-semibold transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <User className="w-4 h-4" />
                Full Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className={`w-full px-4 py-4 rounded-2xl border outline-none transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
                  theme === "dark"
                    ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-indigo-500 focus:bg-slate-700/70"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:bg-white"
                }`}
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className={`flex items-center gap-2 mb-2 font-semibold transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.01 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className={`w-full px-4 py-4 rounded-2xl border outline-none transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
                  theme === "dark"
                    ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-indigo-500 focus:bg-slate-700/70"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:bg-white"
                }`}
                placeholder="john@example.com"
              />
            </div>

            {/* Project Type */}
            <div>
              <label
                htmlFor="projectType"
                className={`flex items-center gap-2 mb-2 font-semibold transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Project Type
              </label>
              <motion.select
                whileFocus={{ scale: 1.01 }}
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                disabled={isLoading}
                className={`w-full px-4 py-4 rounded-2xl border outline-none transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
                  theme === "dark"
                    ? "bg-slate-700/50 border-slate-600 text-white focus:border-indigo-500 focus:bg-slate-700/70"
                    : "bg-gray-50 border-gray-300 text-gray-900 focus:border-indigo-500 focus:bg-white"
                }`}
              >
                <option value="">Select a project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </motion.select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className={`flex items-center gap-2 mb-2 font-semibold transition-colors duration-500 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                Project Details
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.01 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                disabled={isLoading}
                className={`w-full px-4 py-4 rounded-2xl border outline-none resize-none transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
                  theme === "dark"
                    ? "bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-indigo-500 focus:bg-slate-700/70"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-indigo-500 focus:bg-white"
                }`}
                placeholder="Tell us about your project requirements, timeline, and budget..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={
                !isLoading
                  ? {
                      scale: 1.02,
                      boxShadow: "0 0 40px rgba(99, 102, 241, 0.4)",
                    }
                  : {}
              }
              whileTap={!isLoading ? { scale: 0.98 } : {}}
              className="w-full px-8 py-5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={`mt-8 text-center text-sm transition-colors duration-500 ${
            theme === "dark" ? "text-slate-500" : "text-gray-500"
          }`}
        >
          <p>
            We respect your privacy. Your information will never be shared with
            third parties.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
