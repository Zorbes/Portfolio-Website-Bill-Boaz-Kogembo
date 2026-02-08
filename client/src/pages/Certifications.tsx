import { Section } from "@/components/ui/section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export default function CertificationsPage() {
  const certificates = [
    {
      title: "Xero Certified Professional",
      issuer: "Xero",
      date: "Issued: 2026",
      image: "/images/xero-certified.png",
      description:
        "Certified in Xero accounting software, including account setup, bank reconciliation, invoicing, and financial reporting.",
    },
    {
      title: "CPA (Certified Public Accountant)",
      issuer: "ICPAK",
      date: "Issued: 2025",
      image: "/images/cpa.png",
      description:
        "Professional accounting certification covering auditing, taxation, financial reporting, and ethical standards.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      
      {/* Header */}
      <div className="bg-primary pt-20 pb-32 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-display font-bold text-white relative z-10"
        >
          Certifications & Credentials
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/70 mt-4 max-w-2xl mx-auto relative z-10"
        >
          Professional certifications demonstrating expertise in accounting,
          auditing, and financial management.
        </motion.p>
      </div>

      {/* Content */}
      <div className="-mt-20 relative z-20 container mx-auto px-4">
        <Section background="white">

          <div className="grid md:grid-cols-2 gap-8">

            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-slate-50 shadow-sm border-border/50 hover:shadow-lg transition-shadow duration-300 overflow-hidden">

                  {/* Certificate Image */}
                  {cert.image && (
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-56 object-contain p-4 bg-white"
                    />
                  )}

                  <CardHeader>
                    <CardTitle className="text-xl text-primary">
                      {cert.title}
                    </CardTitle>

                    <Badge
                      variant="outline"
                      className="w-fit text-primary/80 border-primary/20 bg-white"
                    >
                      {cert.issuer}
                    </Badge>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="mb-2 text-muted-foreground">
                      {cert.date}
                    </CardDescription>

                    <p className="text-base">
                      {cert.description}
                    </p>
                  </CardContent>

                </Card>
              </motion.div>
            ))}

          </div>

        </Section>
      </div>

    </div>
  );
}
