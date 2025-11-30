import { Projects } from "@/components/Projects";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary pt-20 pb-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-white relative z-10"
        >
          Key Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/70 mt-4 max-w-2xl mx-auto relative z-10"
        >
          Selected engagements showcasing audit execution, internal controls, and data analytics.
        </motion.p>
      </div>
      
      <div className="-mt-20 relative z-20 container mx-auto px-4">
        <Projects />
      </div>
    </div>
  );
}
