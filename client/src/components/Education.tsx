import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Economics & Statistics",
      school: "University of Nairobi",
      year: "Graduated",
      description: "Strong foundation in economic theory, statistical analysis, and quantitative methods."
    },
    {
      degree: "Certified Public Accountant (CPA-K)",
      school: "Strathmore University",
      year: "Completed",
      description: "Professional certification in accounting, auditing, and finance."
    },
    {
      degree: "Data Analytics Program",
      school: "Azubi Africa",
      year: "Completed",
      description: "Intensive training in Power BI, Python, SQL, and data visualization for business insights."
    }
  ];

  return (
    <Section id="education" background="white" className="rounded-xl shadow-sm border border-border/50 overflow-hidden p-0">
      <div className="p-8 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-primary mb-4 flex items-center gap-3">
            <GraduationCap className="h-8 w-8 text-accent" />
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-muted/20 p-6 rounded-lg border border-border/50 hover:border-accent/30 transition-colors"
            >
              <div className="mb-4">
                <h3 className="text-lg font-bold text-primary leading-tight mb-2">{edu.degree}</h3>
                <p className="text-accent font-medium">{edu.school}</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                <Calendar className="h-3 w-3" /> {edu.year}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
