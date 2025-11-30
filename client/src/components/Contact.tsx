import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" background="white">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I am open to new opportunities in audit, finance, and data analysis. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/5 rounded-full">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Email</p>
                <a href="mailto:billkogembo@gmail.com" className="text-lg font-medium text-primary hover:text-accent transition-colors">billkogembo@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="p-3 bg-primary/5 rounded-full">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Phone</p>
                <a href="tel:+254728174051" className="text-lg font-medium text-primary hover:text-accent transition-colors">+254 728 174 051</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <div className="p-3 bg-primary/5 rounded-full">
                <Linkedin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">LinkedIn</p>
                <a href="#" className="text-lg font-medium text-primary hover:text-accent transition-colors">Let's Connect</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
               <div className="p-3 bg-primary/5 rounded-full">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Location</p>
                <span className="text-lg font-medium text-primary">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Card className="bg-slate-50 text-primary border-border/50 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">First Name</label>
                    <Input placeholder="John" className="bg-white" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Last Name</label>
                    <Input placeholder="Doe" className="bg-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="john@example.com" className="bg-white" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Hello Bill, I'd like to discuss..." className="min-h-[120px] bg-white" />
                </div>
                <Button className="w-full bg-primary text-white hover:bg-primary/90" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
