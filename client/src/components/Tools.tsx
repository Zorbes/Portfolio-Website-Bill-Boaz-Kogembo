import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { FileSpreadsheet, Database, Terminal, BarChart3, Briefcase, Layers } from "lucide-react";

export function Tools() {
  const tools = [
    { name: "Microsoft Excel (Advanced)", icon: <FileSpreadsheet className="h-5 w-5" /> },
    { name: "Power BI", icon: <BarChart3 className="h-5 w-5" /> },
    { name: "Python", icon: <Terminal className="h-5 w-5" /> },
    { name: "SQL", icon: <Database className="h-5 w-5" /> },
    { name: "SAP ERP", icon: <Layers className="h-5 w-5" /> },
    { name: "QuickBooks", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Audit Software", icon: <Briefcase className="h-5 w-5" /> },
    { name: "Infor", icon: <Layers className="h-5 w-5" /> },
    { name: "Google Workspace", icon: <Layers className="h-5 w-5" /> },
    { name: "Jira/Trello", icon: <Layers className="h-5 w-5" /> },
  ];

  return (
    <Section id="tools" background="muted">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold text-primary mb-4">Tools & Technologies</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Leveraging modern technology to enhance audit efficiency and accuracy.
        </p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            <Badge 
              variant="outline" 
              className="px-4 py-2 text-base bg-white hover:bg-primary hover:text-white transition-all cursor-default gap-2 border-primary/20"
            >
              {tool.icon}
              {tool.name}
            </Badge>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
