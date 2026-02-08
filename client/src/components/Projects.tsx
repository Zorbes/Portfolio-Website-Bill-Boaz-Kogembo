import { Section } from "@/components/ui/section";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  BarChart2,
  ShieldCheck,
  FileText,
  Layers,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ProjectsProps {
  preview?: boolean;
}

export function Projects({ preview = false }: ProjectsProps) {
  const projects = [
    // ✅ NEW: Xero Bookkeeping Project
    {
      title: "Xero Bookkeeping & Financial Management",
      description:
        "Managed end-to-end bookkeeping using Xero, including account setup, expense processing, bank reconciliation, and financial reporting. Generated Profit & Loss and Balance Sheet reports to improve financial visibility and support management decisions.",
      tags: ["Xero", "Bookkeeping", "Bank Reconciliation", "Financial Reporting"],
      image: "/images/expenses.png",
      icon: <BookOpen className="h-8 w-8 text-accent mb-4" />,
    },

    {
      title: "Internal Audit Engagement (NGO Sector)",
      description:
        "Performed full-scope statutory audit, identified compliance gaps, and prepared IFRS-compliant financial statements.",
      tags: ["Statutory Audit", "IFRS", "Compliance"],
      image: "/images/projects/audit-ngo.png",
      icon: <ShieldCheck className="h-8 w-8 text-accent mb-4" />,
    },

    {
      title: "Controls Review for Corporate Client",
      description:
        "Evaluated internal controls, risk exposure, and produced actionable recommendations.",
      tags: ["Internal Controls", "Risk Assessment", "Advisory"],
      image: "/images/projects/controls-review.png",
      icon: <Layers className="h-8 w-8 text-accent mb-4" />,
    },

    {
      title: "Power BI Audit Dashboard",
      description:
        "Built analytics dashboard to visualize audit findings, risk areas, and financial trends.",
      tags: ["Power BI", "Data Analytics", "Visualization"],
      image: "/images/projects/powerbi-dashboard.png",
      icon: <BarChart2 className="h-8 w-8 text-accent mb-4" />,
    },

    {
      title: "Reconciliation Automation (Britam)",
      description:
        "Helped automate receipting, improving processing time by 21%.",
      tags: ["Automation", "Process Improvement", "Efficiency"],
      image: "/images/projects/reconciliation.png",
      icon: <FileText className="h-8 w-8 text-accent mb-4" />,
    },
  ];

  const displayedProjects = preview ? projects.slice(0, 3) : projects;

  return (
    <Section id="projects" background="white">
      <div className="grid md:grid-cols-2 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border/50 shadow-sm bg-slate-50">
              
              {/* ✅ Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}

              <CardHeader>
                {project.icon}
                <CardTitle className="text-xl text-primary">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-base mb-6 text-muted-foreground">
                  {project.description}
                </CardDescription>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="text-primary/80 border-primary/20 bg-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {preview && (
        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link href="/projects">
              <a className="flex items-center">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
