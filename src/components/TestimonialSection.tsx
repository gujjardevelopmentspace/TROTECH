import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TestimonialSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const mainCardRef = useRef<HTMLDivElement>(null);
  const avatarsRef = useRef<HTMLDivElement>(null);

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

      // Main testimonial card
      gsap.from(mainCardRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: mainCardRef.current,
          start: "top 85%",
        },
      });

      // Avatar circles
      gsap.from(avatarsRef.current?.children || [], {
        opacity: 0,
        scale: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: avatarsRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const avatars = [
    { name: "John D.", image: "/api/placeholder/60/60" },
    { name: "Sarah M.", image: "/api/placeholder/60/60" },
    { name: "Mike R.", image: "/api/placeholder/60/60" },
    { name: "Emily K.", image: "/api/placeholder/60/60" },
    { name: "David L.", image: "/api/placeholder/60/60" },
    { name: "Lisa W.", image: "/api/placeholder/60/60" },
    { name: "Tom B.", image: "/api/placeholder/60/60" },
    { name: "Anna S.", image: "/api/placeholder/60/60" },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            What Our Happy <span className="text-primary">Client Say</span>
          </h2>
          <p
            ref={subtitleRef}
            className="text-xl text-muted-foreground"
          >
            Several selected clients, who already believe in our service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Testimonial Card */}
          <Card
            ref={mainCardRef}
            className="p-8 shadow-lg border-0 bg-white"
          >
            <div className="flex items-center mb-6">
              <Avatar className="w-20 h-20 mr-6">
                <AvatarImage src="/api/placeholder/80/80" alt="Matthew Paul" />
                <AvatarFallback>MP</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="text-2xl font-bold">Matthew Paul</h4>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend."
            </p>
          </Card>

          {/* Client Avatars */}
          <div className="flex justify-center">
            <div ref={avatarsRef} className="grid grid-cols-4 gap-4">
              {avatars.map((avatar, index) => (
                <Avatar
                  key={index}
                  className="w-16 h-16 hover:scale-110 transition-transform duration-300 cursor-pointer"
                >
                  <AvatarImage src={avatar.image} alt={avatar.name} />
                  <AvatarFallback>{avatar.name.charAt(0)}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;