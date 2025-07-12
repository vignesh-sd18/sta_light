import React, { useState } from 'react';
import GlassmorphicCard from './GlassmorphicCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { CheckCircle } from 'lucide-react'; // Import the tick mark icon

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5 text-stalight-primary" />,
    label: "Email",
    value: "infostalight@gmail.com",
    link: "mailto:infostalight@gmail.com"
  },
  {
    icon: <Phone className="h-5 w-5 text-stalight-primary" />,
    label: "Phone",
    value: "+91 8660144040",
    link: "tel:+918660144040"
  },
  {
    icon: <MapPin className="h-5 w-5 text-stalight-primary" />,
    label: "Address",
    value: "StalightTechnology, 12.9330376, 77.560489",
    link: "https://maps.google.com/?q=12.9330376,77.560489"
  },
  {
    icon: <Clock className="h-5 w-5 text-stalight-primary" />,
    label: "Office Hours",
    value: "Mon-Fri: 4:00 PM - 9:00 PM\nSat: 11:00 AM - 4:00 PM\nSun: Closed",
    link: ""
  }
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Hide the success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-stalight-dark to-black">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-64 h-64 rounded-full bg-stalight-primary/10 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 rounded-full bg-stalight-blue/10 blur-3xl"></div>

      <div className="container mx-auto px-4"></div>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins text-gradient-primary">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80">
            Have questions or want to learn more about our services? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact form */}
          <div>
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 font-poppins text-white">Send us a message</h3>

              {isSuccess && (
                <div className="flex items-center justify-center mb-6">
                  <CheckCircle className="h-8 w-8 text-green-500 animate-bounce" />
                  <span className="ml-2 text-white">Your message has been sent successfully!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 h-12"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 h-12"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 min-h-[120px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-stalight-primary hover:bg-stalight-primary/80 text-white font-medium py-5 glass-card-hover"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </Button>
              </form>
            </GlassmorphicCard>
          </div>

          {/* Contact information and map */}
          <div className="space-y-8">
            <GlassmorphicCard className="p-8">
              <h3 className="text-2xl font-semibold mb-6 font-poppins text-white">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <h4 className="text-stalight-primary font-medium mb-1">{info.label}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white/80 hover:text-white transition-colors"
                          target={info.label === "Address" ? "_blank" : undefined}
                          rel="noopener noreferrer"
                        >
                          {info.value.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < info.value.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </a>
                      ) : (
                        <p className="text-white/80">
                          {info.value.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i < info.value.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassmorphicCard>
          </div>
        </div>
    </section>
  );
};

export default Contact;
