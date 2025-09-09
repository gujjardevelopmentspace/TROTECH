import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Palette, HeadphonesIcon, Code, Smartphone, Globe } from "lucide-react";

const Service = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Cross-browser Compatibility"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Strategic design solutions that prioritize user experience and drive business results.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Robust and scalable backend solutions to power your applications and manage your data.",
      features: ["API Development", "Database Design", "Cloud Integration", "Security Implementation"]
    },
    {
      icon: Globe,
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms that drive sales and enhance customer satisfaction.",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics"]
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Ongoing maintenance and support to keep your applications running smoothly.",
      features: ["24/7 Monitoring", "Bug Fixes", "Performance Optimization", "Security Updates"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions to transform your ideas into powerful, scalable applications.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help bring your vision to life with our expert services.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Get Started Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Service;