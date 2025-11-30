import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, BarChart3, ShieldCheck, FileText } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
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
          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Bill Boaz Kogembo is a results-driven <strong>Auditor and Finance Professional</strong> with over 3 years of experience supporting corporate, NGO, religious, and public sector organizations.
            </p>
            <p>
              Skilled in statutory audits, IFRS compliance, internal controls, audit planning, management letters, and financial reporting.
              He is also experienced in <strong>data analytics using Power BI, Python, and SQL</strong> to deliver deeper audit insights.
            </p>
            <p>
              Bill is seeking remote roles such as Audit Senior, Internal Auditor, or Risk and Controls Analyst to lead engagements and strengthen financial governance.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="border-none shadow-md bg-slate-50 hover:bg-slate-100 transition-colors">
            <CardContent className="p-6">
              <ShieldCheck className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-bold text-primary mb-2">Audit & Assurance</h3>
              <p className="text-sm text-muted-foreground">Leading engagements and strengthening governance.</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-slate-50 hover:bg-slate-100 transition-colors">
            <CardContent className="p-6">
              <FileText className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-bold text-primary mb-2">IFRS Compliance</h3>
              <p className="text-sm text-muted-foreground">Ensuring adherence to international standards.</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-slate-50 hover:bg-slate-100 transition-colors">
            <CardContent className="p-6">
              <BarChart3 className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-bold text-primary mb-2">Data Analytics</h3>
              <p className="text-sm text-muted-foreground">Using Power BI, Python & SQL for insights.</p>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md bg-slate-50 hover:bg-slate-100 transition-colors">
            <CardContent className="p-6">
              <CheckCircle2 className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-bold text-primary mb-2">Internal Controls</h3>
              <p className="text-sm text-muted-foreground">Evaluating risk and improving processes.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
