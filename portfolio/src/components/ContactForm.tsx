import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, User, Mail, MessageSquare } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(
      formData.subject || "Contact from Portfolio"
    );
    const body = encodeURIComponent(
      `Hi Harsh,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    const mailtoUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=harshharsh811811@gmail.com&su=${subject}&body=${body}`;
    window.open(mailtoUrl, "_blank");
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 1000);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Card className="p-8 bg-glass-bg/30 backdrop-blur-md border-border/50 hover:border-neon-cyan/50 transition-all duration-500">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center">
          <MessageSquare className="h-6 w-6 text-neon-cyan mr-3" />
          Send a Message
        </h3>
        <p className="text-muted-foreground">
          Let's discuss your next project or collaboration opportunity
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground flex items-center">
              <User className="h-4 w-4 mr-2" />
              Name
            </Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
              className="bg-glass-bg/20 border-border/50 focus:border-neon-cyan text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-foreground flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="bg-glass-bg/20 border-border/50 focus:border-neon-cyan text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-foreground">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What's this about?"
            className="bg-glass-bg/20 border-border/50 focus:border-neon-cyan text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-foreground">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, ideas, or how we can collaborate..."
            rows={6}
            required
            className="bg-glass-bg/20 border-border/50 focus:border-neon-cyan text-foreground placeholder:text-muted-foreground resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || sent}
          className="w-full bg-gradient-neon text-background hover:opacity-90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
          <Send className="mr-2 h-5 w-5" />
          {sent ? "Sent" : isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-neon-cyan/5 border border-neon-cyan/20 rounded-lg">
        <p className="text-sm text-muted-foreground text-center">
          📧 This will open your Gmail with the message pre-filled
        </p>
      </div>
    </Card>
  );
};

export default ContactForm;
