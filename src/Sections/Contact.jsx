import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2rem] p-8 md:p-12 shadow-xl">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Have a project in mind? Reach out and let's build something great.
        </p>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold ml-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold ml-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold ml-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your message here..."
              className="bg-slate-50 dark:bg-slate-800 border-none rounded-2xl p-4 focus:ring-2 focus:ring-blue-500 transition-all outline-none resize-none"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
