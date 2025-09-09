import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Monitor, Smartphone, Globe, ShoppingCart, Building, Heart } from "lucide-react";

const Product = () => {
  const products = [
    {
      icon: Monitor,
      title: "TroSuite Enterprise",
      description: "Comprehensive business management platform for large organizations.",
      features: ["Project Management", "Team Collaboration", "Analytics Dashboard", "API Integration"],
      price: "Custom Pricing",
      category: "Enterprise",
      popular: false
    },
    {
      icon: Smartphone,
      title: "TroMobile Framework",
      description: "Cross-platform mobile development framework for rapid app creation.",
      features: ["React Native", "Flutter Support", "Real-time Sync", "Push Notifications"],
      price: "$99/month",
      category: "Development",
      popular: true
    },
    {
      icon: Globe,
      title: "TroCloud Platform",
      description: "Scalable cloud infrastructure solution with global deployment capabilities.",
      features: ["Auto Scaling", "Load Balancing", "CDN Integration", "Security Monitoring"],
      price: "$49/month",
      category: "Infrastructure",
      popular: false
    },
    {
      icon: ShoppingCart,
      title: "TroCommerce",
      description: "Complete e-commerce solution with advanced marketing and analytics tools.",
      features: ["Payment Processing", "Inventory Management", "SEO Tools", "Marketing Automation"],
      price: "$199/month",
      category: "E-commerce",
      popular: false
    },
    {
      icon: Building,
      title: "TroFlow Business",
      description: "Workflow automation platform for small to medium businesses.",
      features: ["Process Automation", "Document Management", "Team Chat", "Time Tracking"],
      price: "$29/month",
      category: "Business",
      popular: false
    },
    {
      icon: Heart,
      title: "TroHealth",
      description: "Healthcare management system for clinics and medical practices.",
      features: ["Patient Records", "Appointment Scheduling", "Billing System", "HIPAA Compliant"],
      price: "$149/month",
      category: "Healthcare",
      popular: false
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
              Our <span className="text-primary">Products</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our suite of innovative products designed to accelerate your digital transformation.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <Card 
                  key={index} 
                  className={`p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative ${
                    product.popular ? 'border-primary border-2' : ''
                  }`}
                >
                  {product.popular && (
                    <Badge className="absolute -top-3 left-6 bg-primary text-white">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <product.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <Badge variant="outline" className="mb-4">
                    {product.category}
                  </Badge>
                  
                  <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="text-2xl font-bold text-primary mb-6">
                    {product.price}
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      product.popular 
                        ? 'bg-primary hover:bg-primary/90' 
                        : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                    }`}
                  >
                    {product.price === "Custom Pricing" ? "Contact Sales" : "Get Started"}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">
                Compare Our <span className="text-primary">Products</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Choose the perfect solution for your specific needs and requirements.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold">TroSuite</th>
                      <th className="text-center p-4 font-semibold">TroMobile</th>
                      <th className="text-center p-4 font-semibold">TroCloud</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="p-4 font-medium">Team Collaboration</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">-</td>
                    </tr>
                    <tr className="border-t bg-gray-50">
                      <td className="p-4 font-medium">Mobile Support</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-t">
                      <td className="p-4 font-medium">API Integration</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                    <tr className="border-t bg-gray-50">
                      <td className="p-4 font-medium">24/7 Support</td>
                      <td className="text-center p-4">✓</td>
                      <td className="text-center p-4">-</td>
                      <td className="text-center p-4">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact our team to find the perfect product solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;