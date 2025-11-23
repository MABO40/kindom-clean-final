import React from 'react';
import heroImage from "figma:asset/a3e76cac59b842746c46ba20f7472099057e5545.png";
import { Button } from "../ui/button";
import { CheckCircle, Home, Sparkles, Clock, Shield, Heart, Leaf } from 'lucide-react';

// Service Data for House Cleaning
const houseCleaningServices = [
  {
    icon: <Home className="w-6 h-6 text-blue-600" />,
    title: "Regular Home Maintenance",
    description: "Keep your home in pristine condition with our scheduled cleaning service. Weekly, bi-weekly, or monthly visits tailored to your lifestyle and preferences.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "Deep Cleaning Service",
    description: "A comprehensive top-to-bottom cleaning that reaches every corner. Perfect for spring cleaning or preparing your home for special occasions.",
    details: [
      "Detailed kitchen cleaning including appliances",
      "Bathroom deep sanitization",
      "Baseboards and trim cleaning",
      "Window and window sill washing",
      "Ceiling fan and light fixture dusting",
      "Cabinet exterior and interior wiping",
    ],
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "Flexible Scheduling",
    description: "We work around your schedule. Choose morning, afternoon, or evening appointments that fit your busy life.",
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Trusted & Vetted Staff",
    description: "All our cleaners undergo thorough background checks and are fully insured. Your home and belongings are in safe hands.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-blue-600" />,
    title: "Eco-Friendly Products",
    description: "We use organic, plant-based cleaning products that are safe for your family, pets, and the environment. No harsh chemicals or toxic fumes.",
  },
  {
    icon: <Heart className="w-6 h-6 text-blue-600" />,
    title: "Custom Cleaning Plans",
    description: "Every home is unique. We create personalized cleaning checklists based on your specific needs and priorities.",
  },
];

// Services Section Component
const HouseCleaningDetailsSection = () => {
  const highlights = [
    "Custom cleaning checklist for your home",
    "Organic cleaning products only",
    "Same dedicated cleaner each visit",
  ];

  const aboutService = "Our residential home cleaning service is designed for homeowners who value quality and attention to detail. We protect your hardwood floors, marble countertops, and fine furnishings while delivering a spotless clean every time.";

  return (
    <section id="details" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Service Info */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">House Cleaning Excellence</h2>
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {highlights.map((highlight, index) => (
              <span key={index} className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                {highlight}
              </span>
            ))}
          </div>
          <p className="text-lg text-gray-600 mb-4">
            {aboutService}
          </p>
        </div>

        <hr className="mb-16 border-blue-200" />

        {/* Service Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {houseCleaningServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="ml-3 text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>

              {service.details && (
                <ul className="space-y-2 text-sm text-gray-700 mb-4 list-disc list-inside">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Hero Section Component
const HouseCleaningHero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="House cleaning service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
        
          </div>

          {/* Headline */}
          <h1 className="text-white mb-6">
            Expert House Cleaning Services in Calgary
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Luxury homes demand gentle care. Our plant-based cleaning products protect hardwood, marble, and fine art while removing every trace of dust. A dedicated cleaner arrives on a set schedule, follows a custom checklist, and leaves your space presentation ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={() => window.location.href = "tel:5876644443"}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            >
              (587) 664-4443
            </Button>
            <Button
              onClick={() => scrollToSection("details")}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20"
            >
              Email us
            </Button>
          </div>

          {/* Social Proof */}
         
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

// Main Export
export function HouseCleaningPage() {
  return (
    <>
      <HouseCleaningHero />
      <HouseCleaningDetailsSection />
    </>
  );
}