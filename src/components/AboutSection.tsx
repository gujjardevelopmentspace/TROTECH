import { Button } from "@/components/ui/button";
import teamIllustration from "@/assets/team-illustration.png";
import { Users, Package, Target, Globe } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "2,000+", label: "Members" },
    { icon: Package, value: "50+", label: "Digital Products Launched" },
    { icon: Target, value: "5,000,000+", label: "Users Impacted" },
    { icon: Globe, value: "60+", label: "Clients Across 12 Countries" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={teamIllustration}
              alt="Our Team"
              className="max-w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Your Vision, Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Since 2018, we've been the behind-the-scenes builders for daring
              founders turning big ideas into real-world tech. With a distributed
              team of strategists, designers, and developers across Dubai, Lahore,
              and beyond, we work with you — not just for you.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether it's blockchain, fintech, healthcare, real estate, or AI,
              we embed into your mission and move fast, smart, and together.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Let's build what's next — side by side.
            </p>

            {/* ✅ External link button */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href="https://your-external-site.com" // 🔗 Replace with real link
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Connect!
              </a>
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Empowering Businesses{" "}
            <span className="text-primary">Worldwide to Reinvent & Scale</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-12">
            We reached here with our hard work and dedication
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
