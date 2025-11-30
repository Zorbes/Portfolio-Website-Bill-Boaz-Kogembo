import { Section } from "@/components/ui/section";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <Section id="education" background="white">
       <div className="flex flex-col md:flex-row gap-12">
         <div className="md:w-1/3">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Education & <br/>Certifications</h2>
            <p className="text-muted-foreground">
              Continuous learning and professional development are at the core of my career.
            </p>
         </div>
         
         <div className="md:w-2/3 space-y-8">
            <div className="flex gap-4 items-start">
              <div className="p-2 bg-primary/5 rounded-lg mt-1">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Certified Public Accountant (CPA-K)</h3>
                <p className="text-primary/70">Institute of Certified Public Accountants of Kenya (ICPAK)</p>
                <p className="text-sm text-muted-foreground mt-1">Fully Qualified Member</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
               <div className="p-2 bg-primary/5 rounded-lg mt-1">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Bachelor of Commerce (Finance Option)</h3>
                <p className="text-primary/70">University of Nairobi</p>
                <p className="text-sm text-muted-foreground mt-1">Second Class Honours (Upper Division)</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
               <div className="p-2 bg-primary/5 rounded-lg mt-1">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary">Data Science & Analytics Certificate</h3>
                <p className="text-primary/70">Moringa School</p>
                <p className="text-sm text-muted-foreground mt-1">Python, SQL, Data Visualization</p>
              </div>
            </div>
         </div>
       </div>
    </Section>
  );
}
