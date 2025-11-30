import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ExperienceProps {
  preview?: boolean;
}

export function Experience({ preview = false }: ExperienceProps) {
  const jobs = [
    {
      role: "Audit Associate",
      company: "Ronalds Africa LLP",
      period: "Apr 2025 – Present",
      items: [
        "Led statutory audits for 8 entities",
        "Ensured IFRS/ISA compliance",
        "Prepared 12 financial statements & management letters",
        "Mentored junior auditors",
        "Identified control gaps & improved governance"
      ]
    },
    {
      role: "Audit Trainee",
      company: "Ronalds Africa LLP",
      period: "Nov 2024 – Feb 2025",
      items: [
        "Supported planning & execution of audits",
        "Drafted audit schedules, documentation",
        "Participated in client meetings"
      ]
    },
    {
      role: "Account Officer",
      company: "Mathare Community Outreach",
      period: "Apr 2024 – Present",
      items: [
        "Reconciled ledger accounts",
        "Processed 230+ monthly transactions",
        "Prepared financial summaries",
        "Monitored program budgets and donor compliance"
      ]
    },
    {
      role: "Data Analyst Trainee",
      company: "Azubi Africa",
      period: "Dec 2023 – Aug 2024",
      items: [
        "Built Power BI dashboards",
        "Analyzed datasets using Python/SQL",
        "Delivered insights to stakeholders"
      ]
    },
    {
      role: "Assistant Accountant",
      company: "Britam Holdings PLC",
      period: "Feb 2023 – Oct 2023",
      items: [
        "Automated receipting system",
        "Posted 540+ monthly journal entries",
        "Prepared financial statements",
        "Reconciled multi-entity bank accounts"
      ]
    }
  ];

  const otherExperience = [
    "Cross-Cultural Mobilizer",
    "Internal Audit Intern at Safaricom",
    "Leadership at Bonga Kawewe"
  ];

  const displayedJobs = preview ? jobs.slice(0, 2) : jobs;

  return (
    <Section id="experience" background="white">
      <div className="relative border-l-2 border-primary/20 ml-3 md:ml-6 space-y-16 pb-12">
        {displayedJobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-primary">{job.role}</h3>
              <span className="text-sm font-medium text-white bg-primary px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                {job.period}
              </span>
            </div>
            <h4 className="text-lg font-medium text-accent mb-4">{job.company}</h4>
            
            <ul className="space-y-2 list-disc ml-4 text-muted-foreground">
              {job.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {!preview && (
        <div className="mt-16 p-8 bg-slate-50 rounded-xl border border-border/50">
          <h3 className="text-xl font-bold text-primary mb-4">More Experience</h3>
          <div className="flex flex-wrap gap-4">
            {otherExperience.map((exp, i) => (
              <span key={i} className="px-4 py-2 bg-white border border-border rounded-full text-muted-foreground font-medium">
                {exp}
              </span>
            ))}
          </div>
        </div>
      )}

      {preview && (
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/experience">
              <a className="flex items-center">
                View Full Timeline <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
