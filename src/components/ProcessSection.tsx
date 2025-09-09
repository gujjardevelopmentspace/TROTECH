import { useEffect, useRef } from "react"; 
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // ✅ internal link
import mobileDesign from "@/assets/mobile-design.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current?.children || [], {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Image animation
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      // Floating animation for image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              From Design to Seamless Flows
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We obsess over the tiny details that shape big experiences — UI,
              performance, and user delight. Whether it's onboarding or checkout,
              we fine-tune every tap and scroll to work like magic.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* ✅ Internal Link */}
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link to="/build-interfaces">See How We Build Interfaces</Link>
              </Button>

              {/* ✅ External Link */}
              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <a 
                  href="https://your-external-site.com" // 🔗 replace with your link
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Our Portfolio
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              ref={imageRef}
              src={mobileDesign}
              alt="Mobile App Design Process"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
