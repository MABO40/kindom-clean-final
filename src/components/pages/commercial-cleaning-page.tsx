import React from 'react';
import commercialImage from "figma:asset/468a957218da4046cb9d92f6becffbc7b2a2190f.png";
import { Button } from "../ui/button";
import { CheckCircle, Briefcase, Moon, FileCheck, Leaf, Users, Clock } from 'lucide-react';

// Service Data for Commercial Cleaning
const commercialServices = [
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    title: "Office Cleaning",
    description: "Maintain a professional workspace that reflects your brand. Daily, weekly, or monthly service tailored to your business needs.",
  },
  {
    icon: <Moon className="w-6 h-6 text-blue-600" />,
    title: "Night & Early Morning Service",
    description: "We clean when your business is closed. Night or early-morning service ensures zero disruption to your operations.",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-blue-600" />,
    title: "Quality Inspection Sheets",
    description: "A signed inspection sheet awaits you at reception after every visit. Full transparency and accountability guaranteed.",
  },
  {
    icon: <Leaf className="w-6 h-6 text-blue-600" />,
    title: "Eco-Certified Products",
    description: "Low-scent, eco-certified cleaning products support your company's wellness policies and sustainability goals.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Trained Professional Staff",
    description: "Our commercial cleaning team is trained in workplace safety, professional conduct, and efficient cleaning techniques.",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "Reliable & Consistent",
    description: "Same team, same quality, every time. Build a relationship with cleaners who understand your space and standards.",
  },
];

// Services Section Component
const CommercialDetailsSection = () => {
  const highlights = [
    "Night service available",
    "Eco-certified products",
    "Signed quality inspections",
  ];

  const aboutService = "Your office is an extension of your brand. Our commercial cleaning service keeps your workspace professional, healthy, and welcoming. We work around your schedule to deliver seamless service that never interrupts business operations.";

  return (
    <section id="details" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Service Info */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">Professional Commercial Cleaning</h2>
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
          {commercialServices.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-t-4 border-blue-600">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="ml-3 text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Hero Section Component
const CommercialHero = () => {
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
          src={commercialImage}
          alt="Commercial office cleaning"
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
            Expert Commercial Cleaning Services in Calgary
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Your office is an extension of your brand. Night or early-morning service keeps operations seamless. Low-scent, eco-certified products support wellness policies, and a signed inspection sheet awaits you at reception after every visit.
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
             Emailus
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap gap-6 items-center">
          
           
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
 
    </section>
  );
};

// Main Export
export function CommercialCleaningPage() {
  return (
    <>
      <CommercialHero />
      <CommercialDetailsSection />
    </>
  );
}