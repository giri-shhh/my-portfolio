import { motion } from "framer-motion";
import { useInView } from "@/hooks/use-intersection-observer";
import { useRef } from "react";
import { fadeIn, staggerContainer, staggerItems } from "@/lib/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";
import { portfolioData } from "@/data/portfolio-data";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const isFormInView = useInView(formRef, { once: true });
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "An error occurred",
        description: "Could not send your message. Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400">Have a project in mind or want to discuss opportunities? Reach out!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            ref={formRef}
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            variants={fadeIn}
            className="glass-card p-8"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Project Discussion" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell me about your project..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary-600"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="lg:pl-8"
          >
            <motion.div variants={staggerItems} className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Feel free to reach out through any of these channels:</p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors">
                      {portfolioData.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                    <FaPhone className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a href={`tel:${portfolioData.contact.phone}`} className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-400 transition-colors">
                      {portfolioData.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {portfolioData.contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItems}>
              <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a href={portfolioData.social.linkedin} className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="LinkedIn">
                  <FaLinkedinIn className="text-xl text-blue-600" />
                </a>
                <a href={portfolioData.social.github} className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="GitHub">
                  <FaGithub className="text-xl text-gray-800 dark:text-white" />
                </a>
                <a href={portfolioData.social.twitter} className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors" aria-label="Twitter">
                  <FaTwitter className="text-xl text-blue-400" />
                </a>
              </div>
            </motion.div>

            <motion.div variants={staggerItems} className="mt-8 p-6 rounded-lg bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-800 dark:to-gray-900 border border-primary-100 dark:border-gray-700">
              <h3 className="text-lg font-bold mb-2">Looking for new opportunities</h3>
              <p className="text-gray-700 dark:text-gray-300">I'm currently available for freelance work or full-time positions. Let's build something amazing together!</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
