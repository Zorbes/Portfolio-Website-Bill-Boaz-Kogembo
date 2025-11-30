import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Skills() {
  const skillCategories = [
    {
      title: "Audit & Finance Skills",
      skills: [
        "Statutory Audit", 
        "IFRS Compliance", 
        "Internal Controls", 
        "Management Letters", 
        "Financial Reporting", 
        "Audit Planning", 
        "Analytical Review", 
        "Variance Analysis", 
        "Cost Accounting", 
        "Tax Compliance"
      ]
    },
    {
      title: "Data & Technical Skills",
      skills: [
        "Power BI", 
        "Python", 
        "SQL", 
        "Excel (Advanced)", 
        "Financial Modelling", 
        "Audit Software", 
        "ERP Systems (Infor, SAP, QuickBooks)"
      ]
    }
  ];

  return (
    <Section id="skills" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Core Competencies</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive skillset combining traditional finance expertise with modern data capabilities.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-slate-50 p-8 rounded-xl shadow-sm border border-border/50"
          >
            <h3 className="text-xl font-bold text-primary mb-6 border-b pb-3 border-border">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, i) => (
                <Badge key={i} variant="secondary" className="text-primary/90 bg-white border border-primary/10 hover:bg-primary hover:text-white font-medium py-1.5 px-3 transition-colors">
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
