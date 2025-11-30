import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, BarChart3, ShieldCheck, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const highlights = [
    {
      icon: <ShieldCheck className="h-6 w-6 text-accent" />,
      title: "Audit & Assurance",
      description: "Extensive experience in statutory audits and risk assessment."
    },
    {
      icon: <FileText className="h-6 w-6 text-accent" />,
      title: "IFRS Compliance",
      description: "Deep understanding of International Financial Reporting Standards."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-accent" />,
      title: "Data Analytics",
      description: "Leveraging Power BI, Python, and SQL for financial insights."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-accent" />,
      title: "Internal Controls",
      description: "Strengthening governance and operational efficiency."
    }
  ];

  return (
    <Section id="about" background="white">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About Me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a dedicated <strong>Certified Public Accountant (CPA-K)</strong> with a robust background in audit, finance, and compliance. 
              My career is built on a foundation of integrity, precision, and analytical thinking.
            </p>
            <p>
              Unlike traditional finance professionals, I integrate modern data analytics tools like <strong>Python and SQL</strong> into financial reporting, 
              allowing for deeper insights and more efficient audit processes. I specialize in identifying risks, optimizing controls, and ensuring strict adherence to regulatory standards.
            </p>
            <p>
              My goal is to help organizations not just maintain compliance, but to leverage their financial data for strategic growth.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-md bg-muted/30 hover:bg-muted/50 transition-colors">
                <CardContent className="p-6 flex flex-col items-start gap-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
