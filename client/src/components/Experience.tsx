import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";

export function Experience() {
  const jobs = [
    {
      role: "Senior Auditor",
      company: "Top Tier Audit Firm",
      period: "2021 - Present",
      description: "Leading statutory audit engagements for diverse clients. Evaluating internal control systems and recommending improvements. Ensuring compliance with IFRS and ISA standards."
    },
    {
      role: "Audit Associate",
      company: "Regional Accounting Firm",
      period: "2018 - 2021",
      description: "Assisted in financial statement preparation and verification. Conducted substantive testing and analytical procedures. Supported senior auditors in complex engagements."
    },
    {
      role: "Finance Intern",
      company: "Corporate Organization",
      period: "2017 - 2018",
      description: "Gained hands-on experience in accounts payable/receivable, bank reconciliations, and general ledger maintenance."
    }
  ];

  return (
    <Section id="experience" background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Professional Experience</h2>
      </motion.div>

      <div className="relative border-l-2 border-primary/10 ml-3 md:ml-6 space-y-12">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent border-4 border-white shadow-sm" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-xl font-bold text-primary">{job.role}</h3>
              <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                {job.period}
              </span>
            </div>
            <h4 className="text-lg font-medium text-primary/80 mb-3">{job.company}</h4>
            <p className="text-muted-foreground leading-relaxed max-w-3xl">
              {job.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
