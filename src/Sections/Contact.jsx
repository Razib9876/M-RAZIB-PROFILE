import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (
      import.meta.env.VITE_EMAIL_SERVICE_ID &&
      import.meta.env.VITE_EMAIL_TEMPLATE_ID &&
      import.meta.env.VITE_EMAIL_PUBLIC_KEY
    ) {
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAIL_SERVICE_ID,
          import.meta.env.VITE_EMAIL_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        );

        toast.success("Message sent successfully 🚀");

        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });

        if (form.current) form.current.reset();
      } catch (error) {
        console.error(error);
        toast.error("Failed to send message ❌");
      }
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* HEADER */}
        <div className="mb-10 border-l-8 border-base-content pl-6">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-base-content">
            Contact <br />
            <span className="opacity-30">Me.</span>
          </h2>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-8 border-r-2 border-black pr-7"
            >
              {/* NAME */}
              <div className="space-y-2">
                <label className="text-sm text-base-content font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className="w-full bg-transparent border-b border-base-content/40 py-2 outline-none transition-all text-sm text-base-content placeholder:text-base-content/40 focus:border-base-content"
                  required
                  value={formData.user_name}
                  onChange={(e) =>
                    setFormData({ ...formData, user_name: e.target.value })
                  }
                />
              </div>

              {/* EMAIL */}
              <div className="space-y-2">
                <label className="text-sm text-base-content font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-base-content/40 py-2 outline-none transition-all text-sm text-base-content placeholder:text-base-content/40 focus:border-base-content"
                  required
                  value={formData.user_email}
                  onChange={(e) =>
                    setFormData({ ...formData, user_email: e.target.value })
                  }
                />
              </div>

              {/* MESSAGE */}
              <div className="space-y-2">
                <label className="text-sm text-base-content font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full bg-transparent border-b border-base-content/40 py-2 outline-none transition-all text-sm text-base-content placeholder:text-base-content/40 resize-none focus:border-base-content"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full py-3 border border-base-content text-base-content hover:bg-base-content hover:text-base-100 transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-widest font-black disabled:opacity-50"
              >
                {isSubmitting ? "Transmitting..." : "Submit"}
                <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </motion.div>

          {/* RIGHT - TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6 "
          >
            <h3 className="text-2xl md:text-3xl font-bold text-base-content">
              Let’s Talk
            </h3>

            <p className="text-base-content/70 leading-relaxed">
              Have an idea or project in mind? I’m open to discussing meaningful
              work and building something impactful together.
            </p>

            <p className="text-base-content/70 leading-relaxed">
              Whether it's backend systems, modern web apps, or improving your
              digital presence — I can help turn your ideas into reality.
            </p>

            <p className="text-base-content font-semibold underline underline-offset-4">
              Let’s build something real.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
