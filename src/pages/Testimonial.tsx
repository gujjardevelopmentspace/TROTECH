import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Matthew Paul",
      role: "CEO, TechStart Inc.",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
      company: "TechStart Inc."
    },
    {
      name: "Sarah Johnson",
      role: "Product Manager, InnovateCorp",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "TroTech transformed our idea into a beautiful, functional product. Their expertise in both design and development is unmatched. The team is professional and delivers on time.",
      company: "InnovateCorp"
    },
    {
      name: "David Chen",
      role: "Founder, DigitalFlow",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Working with TroTech was a game-changer for our startup. They understood our vision and helped us build a scalable platform that our users love. Exceptional service!",
      company: "DigitalFlow"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO, CloudTech Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The technical expertise and attention to detail that TroTech brings is incredible. They delivered a complex enterprise solution that exceeded our expectations.",
      company: "CloudTech Solutions"
    },
    {
      name: "Michael Brown",
      role: "Marketing Director, E-Commerce Plus",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Our e-commerce platform built by TroTech has increased our sales by 300%. The user experience is fantastic and the backend is solid. Couldn't be happier!",
      company: "E-Commerce Plus"
    },
    {
      name: "Lisa Wang",
      role: "VP of Technology, HealthTech Pro",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "TroTech delivered a HIPAA-compliant healthcare platform that our doctors and patients love. The security and user experience are both top-notch.",
      company: "HealthTech Pro"
    },
    {
      name: "James Wilson",
      role: "Startup Founder, AI Ventures",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "From concept to deployment, TroTech was with us every step of the way. Their AI and machine learning expertise helped us build something truly innovative.",
      company: "AI Ventures"
    },
    {
      name: "Anna Martinez",
      role: "Operations Manager, LogiFlow",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The workflow automation platform TroTech built for us has streamlined our operations completely. We've saved countless hours and improved efficiency.",
      company: "LogiFlow"
    },
    {
      name: "Robert Taylor",
      role: "CEO, FinanceFirst",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "TroTech's fintech expertise is evident in every aspect of our platform. The security, performance, and user experience are all world-class.",
      company: "FinanceFirst"
    }
  ];

  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Countries Served" },
    { value: "1000+", label: "Projects Completed" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              What Our <span className="text-primary">Clients Say</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with TroTech.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Client Success Stories</h2>
              <p className="text-xl text-muted-foreground">
                Real feedback from real clients who've experienced the TroTech difference.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary/20 absolute" />
                    <div className="flex ml-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="p-12 text-center bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <Quote className="w-16 h-16 text-primary mx-auto mb-6" />
              <blockquote className="text-2xl font-medium mb-8 leading-relaxed">
                "TroTech didn't just build our app—they understood our business, anticipated our needs, and delivered a solution that transformed how we operate. Their team feels like an extension of ours."
              </blockquote>
              <div className="flex items-center justify-center">
                <Avatar className="w-16 h-16 mr-4">
                  <AvatarImage src="/api/placeholder/64/64" alt="Jennifer Adams" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-bold text-lg">Jennifer Adams</div>
                  <div className="text-muted-foreground">CEO, Global Enterprises</div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create something amazing together. Start your journey with TroTech today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                Schedule a Call
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonial;