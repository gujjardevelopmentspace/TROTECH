import { Card } from "@/components/ui/card";
import { Monitor, Palette, HeadphonesIcon } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Digital Product Development",
      description:
        "We build web and mobile apps that are fast, scalable, and tailored to solve real user problems. From MVPs to enterprise platforms, we turn complex ideas into clean, working code.",
      image: "src/assets/2.png", // ✅ replace with your image path
    },
    {
      icon: Palette,
      title: "Designing Exceptional User Experiences",
      description:
        "Our UX/UI design isn't just pretty — it's strategic. We craft intuitive, conversion-driven interfaces that keep users coming back.",
      image: "src/assets/4.png", // ✅ replace with your image path
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support & Assistance",
      description:
        "Your tech doesn't sleep — neither do we. We offer reliable, ongoing support so your product performs flawlessly, always.",
      image: "src/assets/hero-illustration.png", // ✅ replace with your image path
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to Launch &<br />
            Grow Smarter
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Whether you're starting from scratch or scaling fast, we offer the
            technical muscle and creative firepower to bring your digital product
            to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
            >
              {/* ✅ Service Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-40 object-cover rounded-xl mb-6"
              />

              {/* Icon */}
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
