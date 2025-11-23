import React from 'react';
import condoImage from "figma:asset/468a957218da4046cb9d92f6becffbc7b2a2190f.png";
import { Button } from "../ui/button";
import { CheckCircle, Building2, Volume2, Key, Clock, Sparkles, Users } from 'lucide-react';

// Service Data for Condo Cleaning
const condoCleaningServices = [
  {
    icon: <Building2 className="w-6 h-6 text-blue-600" />,
    title: "High-Rise Expertise",
    description: "Specialized cleaning for condo and apartment buildings. We understand the unique challenges of high-rise living and building regulations.",
  },
  {
    icon: <Volume2 className="w-6 h-6 text-blue-600" />,
    title: "Quiet Equipment",
    description: "Our compact HEPA vacuums and cleaning tools operate quietly to respect your neighbors and building quiet hours.",
  },
  {
    icon: <Key className="w-6 h-6 text-blue-600" />,
    title: "Key-Drop Service",
    description: "Flexible access options including key-drop coordination, concierge coordination, and lockbox systems for your convenience.",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "Fast-Paced Service",
    description: "Downtown living demands efficiency. We work quickly without compromising quality, perfect for busy professionals.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "Stainless Steel Specialist",
    description: "Expert care for modern appliances, elevator finishes, and stainless steel fixtures. Leave everything fingerprint-free and gleaming.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Building-Friendly",
    description: "We follow all building protocols, use service elevators appropriately, and maintain professional relationships with property management.",
  },
];

// Services Section Component
const CondoCleaningDetailsSection = () => {
  const highlights = [
    "Quiet, neighbor-friendly equipment",
    "Flexible key-drop coordination",
    "Building protocol compliant",
  ];

  const aboutService = "Our condo cleaning service is designed for downtown living. We understand the fast-paced lifestyle and building requirements. From quiet equipment to seamless key-drop coordination, we make keeping your condo pristine effortless.";

  return (
    <section id="details" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Service Info */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">Condo Cleaning Made Simple</h2>
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
          {condoCleaningServices.map((service, index) => (
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
const CondoCleaningHero = () => {
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
          src={condoImage}
          alt="Condo cleaning service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
     

          {/* Headline */}
          <h1 className="text-white mb-6">
            Expert Condo Cleaning Services in Calgary
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Downtown living is fast-paced. We keep your condo suite pristine without disrupting neighbours. Compact HEPA vacuums reduce noise, stainless-steel polish leaves elevators fingerprint-free, and key-drop coordination makes life simple.
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
          <div className="flex flex-wrap gap-6 items-center">
            
          </div>
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
export function CondoCleaningPage() {
  return (
    <>
      <CondoCleaningHero />
      <CondoCleaningDetailsSection />
    </>
  );
}