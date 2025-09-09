import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Palette, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const techListRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const techStack = [
    "React", "Next.js", "Node.js", "Express", "Django", "Laravel", 
    "WordPress", "Webflow", "Shopify", "MongoDB", "PostgreSQL", 
    "Firebase", "AWS", "Docker", "Stripe"
  ];

  const services = [
    {
      icon: Search,
      title: "Discover & Define",
      description: "We dive deep into your goals, audience, and challenges to shape a clear product vision and roadmap.",
      link: "→"
    },
    {
      icon: Palette,
      title: "Design & Develop",
      description: "From wireframes to working code, we design stunning interfaces and build robust, scalable tech.",
      link: "→"
    },
    {
      icon: Rocket,
      title: "Launch & Support",
      description: "We deploy with confidence and stay by your side — offering updates, support, and ongoing optimization.",
      link: "→"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from([titleRef.current, subtitleRef.current], {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Tech stack animation
      gsap.from(techListRef.current?.children || [], {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: techListRef.current,
          start: "top 85%",
        },
      });

      // Cards animation
      gsap.from(cardsRef.current?.children || [], {
        opacity: 0,
        y: 80,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-tech-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Powered by Cutting-Edge Technology
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-8"
          >
            At the core of everything we build is a commitment to cutting-edge technology. From AI and machine learning to blockchain, cloud-native systems, and real-time analytics, we use the latest tools to craft future-proof solutions.
          </p>

          {/* Tech Stack */}
          <div ref={techListRef} className="flex flex-wrap justify-center gap-3 mb-8">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Service Cards */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {service.description}
              </p>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 p-0 h-auto"
              >
                {service.link}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;