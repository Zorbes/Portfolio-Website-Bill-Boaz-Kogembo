import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BarChart2, Database, FileSpreadsheet } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Financial Dashboard Automation",
      description: "Developed an interactive Power BI dashboard to automate monthly financial reporting, reducing preparation time by 40%.",
      tags: ["Power BI", "DAX", "SQL"],
      icon: <BarChart2 className="h-8 w-8 text-accent mb-4" />
    },
    {
      title: "Audit Anomaly Detection Tool",
      description: "Created a Python script using Pandas to identify irregularities in general ledger transactions, enhancing audit sampling efficiency.",
      tags: ["Python", "Pandas", "Audit"],
      icon: <Database className="h-8 w-8 text-accent mb-4" />
    },
    {
      title: "Revenue Reconciliation Model",
      description: "Built a complex Excel model with VBA macros to reconcile revenue streams across multiple systems for a large retail client.",
      tags: ["Excel", "VBA", "Financial Modelling"],
      icon: <FileSpreadsheet className="h-8 w-8 text-accent mb-4" />
    }
  ];

  return (
    <Section id="projects" background="muted">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
        <p className="text-muted-foreground">Showcasing the intersection of finance and technology.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-none shadow-sm bg-white">
              <CardHeader>
                {project.icon}
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-primary/70 border-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
