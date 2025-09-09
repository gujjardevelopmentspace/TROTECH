import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Shield, 
  Layers, 
  Cloud, 
  Smartphone, 
  BarChart3,
  Lock,
  Wifi,
  Users,
  Code2,
  Palette,
  Rocket
} from "lucide-react";

const Feature = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description: "Optimized code and modern architecture ensure your applications load in milliseconds.",
      category: "Performance"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security measures protect your data and user information.",
      category: "Security"
    },
    {
      icon: Layers,
      title: "Scalable Architecture",
      description: "Built to grow with your business from startup to enterprise scale.",
      category: "Architecture"
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with AWS, Google Cloud, and Azure platforms.",
      category: "Infrastructure"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Responsive design that works perfectly on all devices and screen sizes.",
      category: "Design"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Built-in analytics and reporting to track performance and user behavior.",
      category: "Analytics"
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption ensures your sensitive data stays protected.",
      category: "Security"
    },
    {
      icon: Wifi,
      title: "Real-time Updates",
      description: "Live data synchronization and real-time notifications across all platforms.",
      category: "Performance"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Comprehensive user authentication and role-based access control.",
      category: "Features"
    },
    {
      icon: Code2,
      title: "Clean Code",
      description: "Well-documented, maintainable code following industry best practices.",
      category: "Development"
    },
    {
      icon: Palette,
      title: "Custom Theming",
      description: "Fully customizable design system to match your brand identity.",
      category: "Design"
    },
    {
      icon: Rocket,
      title: "Quick Deployment",
      description: "Automated deployment pipelines for fast and reliable releases.",
      category: "DevOps"
    }
  ];

  const categories = ["All", "Performance", "Security", "Design", "Architecture"];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-hero-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Powerful <span className="text-primary">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to build, deploy, and scale modern applications with confidence.
            </p>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="secondary"
                  className="px-6 py-2 text-sm cursor-pointer hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
                  </div>
                  <Badge variant="outline" className="mb-3 text-xs">
                    {feature.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Highlight */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Built for <span className="text-primary">Modern Development</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our platform combines cutting-edge technology with proven methodologies to deliver exceptional results.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">99.9% Uptime</h3>
                <p className="text-muted-foreground">
                  Industry-leading reliability with robust infrastructure and monitoring.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">1M+ Users</h3>
                <p className="text-muted-foreground">
                  Trusted by over a million users worldwide across various industries.
                </p>
              </Card>

              <Card className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">10x Faster</h3>
                <p className="text-muted-foreground">
                  Deploy applications 10 times faster with our optimized development workflow.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Feature;