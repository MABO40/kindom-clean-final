import React from 'react';
import heroImage from "figma:asset/a3e76cac59b842746c46ba20f7472099057e5545.png";
import { Button } from "../ui/button";
import { CheckCircle, Truck, Home, Building, Hammer, ClipboardCheck, Sparkles } from 'lucide-react';

// Service Data for Move Out Cleaning
const moveOutServices = [
  {
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    title: "Move-Out Deep Clean",
    description: "Complete cleaning for tenants leaving a property. We ensure you get your full security deposit back with our thorough move-out service.",
  },
  {
    icon: <Home className="w-6 h-6 text-blue-600" />,
    title: "Move-In Fresh Start",
    description: "Move into a spotless space. We deep clean before you arrive so you can unpack in a pristine, ready-to-live-in home.",
  },
  {
    icon: <Hammer className="w-6 h-6 text-blue-600" />,
    title: "Post-Construction Cleaning",
    description: "Remove all construction dust, debris, and residue. Perfect for new builds or renovations before occupancy.",
    details: [
      "Removal of paint splatters and drywall dust",
      "Window cleaning inside and out",
      "Cabinet and drawer interior cleaning",
      "Floor cleaning and polishing",
      "Bathroom fixture polishing",
      "Kitchen appliance cleaning",
    ],
  },
  {
    icon: <Building className="w-6 h-6 text-blue-600" />,
    title: "Property Manager Special",
    description: "Fast turnovers for landlords and property managers. We work on your schedule to get units tenant-ready quickly.",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6 text-blue-600" />,
    title: "Inspection Ready",
    description: "We clean to meet property management inspection standards. Every appliance, baseboard, vent, and surface is hand-over ready.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-blue-600" />,
    title: "Complete Deep Clean",
    description: "We scrub every corner including inside appliances, cabinets, baseboards, vents, windows, and all surfaces from top to bottom.",
  },
];

// Services Section Component
const MoveOutDetailsSection = () => {
  const highlights = [
    "Get your deposit back guarantee",
    "Same-day service available",
    "Post-construction specialists",
  ];

  const aboutService = "Our move-in/move-out cleaning service is trusted by property managers, landlords, and builders throughout Calgary. We deliver flawless turnovers that meet inspection standards every time.";

  return (
    <section id="details" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Service Info */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">Flawless Move-Out & Turnover Cleaning</h2>
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
          {moveOutServices.map((service, index) => (
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
const MoveOutHero = () => {
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
          alt="Move out cleaning service"
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
            Professional Move Out Cleaning in Calgary
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            We do move-in / move-out cleaning for property managers, landlords, and builders who need flawless turnovers. From move-out resets and move-in fresh starts to post-construction detailing, we scrub appliances, cabinets, baseboards, vents, and more so every unit is hand-over-ready.
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
export function MoveOutCleaningPage() {
  return (
    <>
      <MoveOutHero />
      <MoveOutDetailsSection />
    </>
  );
}