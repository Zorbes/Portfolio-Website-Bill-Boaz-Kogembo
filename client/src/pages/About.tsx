import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Tools } from "@/components/Tools";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="bg-primary pt-20 pb-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-white relative z-10"
        >
          About Me
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/70 mt-4 max-w-2xl mx-auto relative z-10"
        >
          My professional journey, technical expertise, and educational background.
        </motion.p>
      </div>
      
      <div className="-mt-20 relative z-20 container mx-auto px-4 space-y-20">
        <About />
        <Skills />
        <Tools />
        <Education />
      </div>
    </div>
  );
}
