import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Clock, Loader2, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useMetaTags } from "../hooks/useMetaTags";
import { useSubmitMessage } from "../hooks/useQueries";

const hours = [
  { days: "Monday – Thursday", time: "11:00 AM – 8:00 PM" },
  { days: "Friday – Saturday", time: "11:00 AM – 9:00 PM" },
  { days: "Sunday", time: "12:00 PM – 7:00 PM" },
];

export default function ContactPage() {
  useMetaTags({
    title: "Contact | Chapman's BBQ Monticello Indiana",
    description:
      "Contact Chapman's BBQ in Monticello, Indiana. Address: 1430 N Main St. Phone: +1 830-998-5031. Get directions or send us a message.",
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const { mutate, isPending, isSuccess, isError } = useSubmitMessage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(form);
  };

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="py-16 px-4 text-center">
        <span className="text-accent text-sm font-semibold tracking-widest uppercase">
          We'd Love to Hear From You
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-black mt-2">
          Contact Us
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-8">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="font-display text-2xl font-bold mb-5">
                  Find Us
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        1430 N Main St
                        <br />
                        Monticello, IN 47960
                      </p>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=1430+N+Main+St,+Monticello,+IN+47960"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent text-sm font-semibold mt-1 inline-block hover:underline"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a
                        href="tel:+18309985031"
                        className="text-muted-foreground hover:text-accent text-sm mt-0.5 block transition-colors"
                      >
                        +1 830-998-5031
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h2 className="font-display text-2xl font-bold mb-5 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-accent" /> Hours
                </h2>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.days} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{h.days}</span>
                      <span className="font-semibold text-foreground">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div
                className="rounded-xl overflow-hidden border border-border h-64"
                data-ocid="contact.map_marker"
              >
                <iframe
                  title="Chapman's BBQ Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.2!2d-86.7637!3d40.7462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8812b!2s1430+N+Main+St%2C+Monticello%2C+IN+47960!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
              <h2 className="font-display text-2xl font-bold mb-6">
                Send Us a Message
              </h2>

              {isSuccess ? (
                <motion.div
                  data-ocid="contact.success_state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle className="w-16 h-16 text-accent mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out! We'll get back to you as soon as
                    possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      data-ocid="contact.name_input"
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Your full name"
                      required
                      autoComplete="name"
                      className="bg-muted border-border focus:border-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      data-ocid="contact.email_input"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="your@email.com"
                      required
                      autoComplete="email"
                      className="bg-muted border-border focus:border-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-ocid="contact.phone_input"
                      value={form.phone}
                      onChange={update("phone")}
                      placeholder="+1 (555) 000-0000"
                      autoComplete="tel"
                      className="bg-muted border-border focus:border-accent"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      data-ocid="contact.textarea"
                      value={form.message}
                      onChange={update("message")}
                      placeholder="How can we help you?"
                      required
                      rows={5}
                      className="bg-muted border-border focus:border-accent resize-none"
                    />
                  </div>

                  {isError && (
                    <div
                      data-ocid="contact.error_state"
                      className="bg-destructive/10 border border-destructive/30 rounded-lg p-3 text-destructive text-sm"
                    >
                      Something went wrong. Please try again or call us
                      directly.
                    </div>
                  )}

                  <Button
                    type="submit"
                    data-ocid="contact.submit_button"
                    disabled={isPending}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-6 text-base"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        <span data-ocid="contact.loading_state">
                          Sending...
                        </span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
