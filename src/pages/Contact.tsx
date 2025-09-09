// src/pages/Contact.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="min-h-screen bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
          Let’s Talk 🚀
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12 text-center">
          Have an idea, project, or partnership in mind?  
          We’d love to hear from you. Fill out the form below and our team will get back to you shortly.
        </p>

        {/* Simple Contact Form */}
        <form className="space-y-6 max-w-2xl mx-auto">
          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-left text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full mt-2 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              required
            />
          </div>

          <Button
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            type="submit"
          >
            Send Message
          </Button>
        </form>

        <div className="text-center mt-10">
          <Link to="/">
            <Button variant="outline" size="lg">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
