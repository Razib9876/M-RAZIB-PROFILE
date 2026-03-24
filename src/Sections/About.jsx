import Section from "../components/Section";

const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-between bg-amber-300">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-6">
            I am a passionate developer with a focus on **User Experience**. I
            don't just write code; I build interfaces that feel natural and
            performant. With 3+ years of experience in the React ecosystem, I
            help brands turn complex ideas into simple digital products.
          </p>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="text-3xl font-bold text-blue-600">50+</h4>
              <p className="text-sm text-slate-500">Projects Completed</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <h4 className="text-3xl font-bold text-purple-600">12</h4>
              <p className="text-sm text-slate-500">Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
          <div className="relative bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
              alt="Profile"
              className="w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
