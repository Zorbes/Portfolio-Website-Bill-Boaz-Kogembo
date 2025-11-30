import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { BarChart2, ShieldCheck, FileText, Layers } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Internal Audit Engagement (NGO Sector)",
      description: "Performed full-scope statutory audit, identified compliance gaps, and prepared IFRS-compliant financial statements.",
      tags: ["Statutory Audit", "IFRS", "Compliance"],
      icon: <ShieldCheck className="h-8 w-8 text-accent mb-4" />
    },
    {
      title: "Controls Review for Corporate Client",
      description: "Evaluated internal controls, risk exposure, and produced actionable recommendations.",
      tags: ["Internal Controls", "Risk Assessment", "Advisory"],
      icon: <Layers className="h-8 w-8 text-accent mb-4" />
    },
    {
      title: "Power BI Audit Dashboard",
      description: "Built analytics dashboard to visualize audit findings, risk areas, and financial trends.",
      tags: ["Power BI", "Data Analytics", "Visualization"],
      icon: <BarChart2 className="h-8 w-8 text-accent mb-4" />
    },
    {
      title: "Reconciliation Automation (Britam)",
      description: "Helped automate receipting, improving processing time by 21%.",
      tags: ["Automation", "Process Improvement", "Efficiency"],
      icon: <FileText className="h-8 w-8 text-accent mb-4" />
    }
  ];

  return (
    <Section id="projects" background="white">
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50 shadow-sm bg-slate-50">
              <CardHeader>
                {project.icon}
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-6 text-muted-foreground">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-primary/80 border-primary/20 bg-white">
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
