import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Finance & Audit",
      skills: ["Statutory Audit", "IFRS Compliance", "Internal Controls", "Financial Reporting", "Risk Management", "Taxation", "Budgeting", "Forecasting"]
    },
    {
      title: "Data Analytics & Tools",
      skills: ["Power BI", "Python (Pandas, NumPy)", "SQL", "Advanced Excel", "Tableau", "DAX", "Data Visualization"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Strategic Planning", "Communication", "Problem Solving", "Attention to Detail", "Team Management"]
    }
  ];

  return (
    <Section id="skills" background="muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Technical Proficiency</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A blend of traditional accounting expertise and modern data science capabilities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-xl shadow-sm border border-border/50"
          >
            <h3 className="text-xl font-bold text-primary mb-6 border-b pb-3 border-border">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-primary/80 bg-primary/5 hover:bg-primary/10 font-normal py-1 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
