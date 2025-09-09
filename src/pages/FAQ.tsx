import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Clock, DollarSign, Users, Code, MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      icon: DollarSign,
      title: "Pricing & Billing",
      questions: [
        {
          question: "What are your pricing models?",
          answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project complexity, timeline, and requirements. Contact us for a custom quote."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans for larger projects. Typically, we work with milestone-based payments or monthly installments for ongoing projects."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, we believe in transparent pricing. All costs are outlined in our project proposal, including any third-party services or tools required for your project."
        }
      ]
    },
    {
      icon: Clock,
      title: "Timeline & Process",
      questions: [
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity. A simple website takes 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during the planning phase."
        },
        {
          question: "What is your development process?",
          answer: "We follow an agile methodology with regular sprints, client check-ins, and iterative development. This ensures transparency and allows for adjustments throughout the project."
        },
        {
          question: "Can you work with tight deadlines?",
          answer: "Yes, we can accommodate urgent projects. We'll assess the requirements and may adjust our team size or work extended hours to meet your deadline."
        }
      ]
    },
    {
      icon: Code,
      title: "Technical Questions",
      questions: [
        {
          question: "What technologies do you use?",
          answer: "We use modern technologies including React, Node.js, Python, AWS, and more. We choose the best tech stack based on your project requirements and long-term goals."
        },
        {
          question: "Do you provide ongoing maintenance?",
          answer: "Yes, we offer maintenance packages that include bug fixes, security updates, performance optimization, and feature enhancements."
        },
        {
          question: "Can you work with our existing code?",
          answer: "Absolutely! We can review, audit, and enhance existing codebases. We also provide code migration and modernization services."
        }
      ]
    },
    {
      icon: Users,
      title: "Collaboration",
      questions: [
        {
          question: "How do you communicate during projects?",
          answer: "We use various communication tools including Slack, email, and video calls. We provide regular updates and maintain open communication channels throughout the project."
        },
        {
          question: "Can we be involved in the development process?",
          answer: "Yes, client involvement is encouraged! We provide access to project dashboards, conduct regular demos, and welcome feedback at every stage."
        },
        {
          question: "Do you work with international clients?",
          answer: "Yes, we work with clients worldwide. Our team is experienced in collaborating across different time zones and cultural contexts."
        }
      ]
    }
  ];

  const quickAnswers = [
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we provide free initial consultations to discuss your project and provide recommendations."
    },
    {
      question: "What industries do you serve?",
      answer: "We work across various industries including healthcare, fintech, e-commerce, education, and more."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive post-launch support including hosting, monitoring, and ongoing development."
    },
    {
      question: "Can you help with mobile apps?",
      answer: "Yes, we develop both native and cross-platform mobile applications for iOS and Android."
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
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Find answers to common questions about our services, process, and how we can help your business.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                placeholder="Search for answers..."
                className="pl-10 h-12 text-center"
              />
            </div>
          </div>
        </section>

        {/* Quick Answers */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Quick Answers</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {quickAnswers.map((qa, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <h3 className="font-semibold mb-3 text-primary">{qa.question}</h3>
                  <p className="text-muted-foreground">{qa.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">
              Browse by <span className="text-primary">Category</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {faqCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((qa, qaIndex) => (
                      <AccordionItem key={qaIndex} value={`item-${categoryIndex}-${qaIndex}`} className="border border-gray-200 rounded-lg px-4">
                        <AccordionTrigger className="text-left font-medium hover:no-underline">
                          {qa.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground leading-relaxed">
                          {qa.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-primary/5 rounded-2xl p-12">
              <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Can't find what you're looking for? Our team is here to help you with any questions or concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Contact Support
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Other Ways We Can Help</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Technical Documentation</h3>
                <p className="text-muted-foreground mb-4">
                  Access comprehensive guides and API documentation for developers.
                </p>
                <Button variant="outline">View Docs</Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community Forum</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with other users and get answers from the community.
                </p>
                <Button variant="outline">Join Forum</Button>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Live Chat</h3>
                <p className="text-muted-foreground mb-4">
                  Get instant help from our support team through live chat.
                </p>
                <Button variant="outline">Start Chat</Button>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;