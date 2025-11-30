import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Linkedin, Mail } from "lucide-react";
import heroBg from "@assets/generated_images/modern_corporate_navy_blue_abstract_background_with_geometric_lines.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Corporate Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 mx-auto">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent font-medium tracking-wider uppercase mb-4 text-sm md:text-base">
              Audit & Finance Professional (CPA-K)
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              Bill Boaz <br />
              <span className="text-white/80">Kogembo</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Expert in Statutory Audits, IFRS Compliance, Internal Controls, and Financial Data Analytics. 
              Bridging the gap between traditional finance and modern data intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white border-none">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
