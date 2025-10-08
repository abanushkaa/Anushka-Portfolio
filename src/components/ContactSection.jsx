import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodementor } from "react-icons/si";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_x248h58", // ✅ fixed: removed space
        "template_62naf3o",
        e.target,
        "j2Pvno9GB-EWIwYxv"
      )
      .then(
        () => {
          toast({
            title: "Message sent!",
            description:
              "Thank you for reaching out. I'll get back to you soon.",
          });
          setIsSubmitting(false);
          e.target.reset(); // ✅ clear form after success
        },
        (error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again.",
            variant: "destructive",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
          I'm always open to discussing new opportunities and ideas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:abanushka678@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    abanushka678@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+918808343652"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (+91) 8808343652
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground hover:text-primary transition-colors">
                    Noida, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/abanushka678/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/abanushkaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://leetcode.com/u/AnushkaaB/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <SiLeetcode />
                </a>
                <a
                  href="https://www.geeksforgeeks.org/user/abanushyveq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <SiGeeksforgeeks />
                </a>
                <a
                  href="https://codolio.com/profile/AnushkaaB/card"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <SiCodementor />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Anushka Baranwal..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              {/* Hidden field for to_name */}
              <input type="hidden" name="to_name" value="Anushka" />

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
