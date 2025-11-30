import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Linkedin, Mail } from "lucide-react";
import heroBg from "@assets/generated_images/professional_headshot_of_a_male_auditor_in_a_suit.png";
import { Link } from "wouter";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-slate-900" />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-accent/5 skew-x-12 transform origin-top" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-accent font-medium tracking-wider uppercase mb-4 text-sm md:text-base font-display">
              Audit, Risk & Finance Professional | CPA-K
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
              Strengthening <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Financial Integrity</span>
            </h1>
            <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-xl">
              Through audit execution, internal controls, data analytics, and IFRS-compliant reporting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 border-none" asChild>
                <Link href="/contact">
                  <a className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </a>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent text-white border-white/20 hover:bg-white/10 hover:text-white">
                <Download className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative hidden md:block"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-accent rounded-full opacity-20 blur-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              src={heroBg} 
              alt="Bill Boaz Kogembo" 
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg z-20 max-w-[200px]">
              <p className="text-primary font-bold text-sm">3+ Years Experience</p>
              <p className="text-muted-foreground text-xs">Supporting corporate, NGO & public sectors</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
