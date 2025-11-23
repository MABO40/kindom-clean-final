import React from 'react';
import heroImage from "figma:asset/a3e76cac59b842746c46ba20f7472099057e5545.png";
import { Button } from "../ui/button";
import { CheckCircle, Home, Factory, Truck, Star, Briefcase } from 'lucide-react';

// Service Data
const serviceData = [
  {
    icon: <Home className="w-6 h-6 text-blue-600" />,
    title: "Residential Home Cleaning",
    description: "Luxury homes demand gentle care. Our plant-based cleaning products protect hardwood, marble, and fine art while removing every trace of dust. A dedicated cleaner arrives on a set schedule, follows a custom checklist, and leaves your space presentation ready for royalty.",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    title: "Condo Cleaning",
    description: "Downtown living is fast-paced. We keep your condo suite pristine without disrupting neighbours. Compact HEPA vacuums reduce noise, stainless-steel polish leaves elevators fingerprint-free, and key-drop coordination makes life simple.",
  },
  {
    icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    title: "Deep Cleaning",
    description: "Restore your home to showcase perfection with a focused top-to-bottom reset. Our deep clean option adds the following specialty details to every standard visit:",
    details: [
      "Fridge interior – shelves, drawers, door seals, and drip trays washed and sanitized",
      "Oven cleaning – racks removed, baked-on residue lifted, glass door polished",
      "Cabinet interiors – crumbs, spills, and shelf liners cleared and surfaces wiped dry",
      "Baseboards – dust and scuff marks removed along every wall",
      "Window sills – grime and pollen washed away for a fresh outdoor view",
      "Linen closet refresh – contents neatly folded, shelves vacuumed and wiped",
      "Spot wall washing – fingerprints and smudges treated without damaging paint",
      "Vent covers – dust and allergens extracted to improve air quality",
      "Ceiling fans – blades and housings cleaned without scattering debris",
    ],
    footer: "Choose this service when you want every overlooked corner handled with care. We scrub the surfaces you do not have time to reach, renewing your space."
  },
  {
    icon: <Factory className="w-6 h-6 text-blue-600" />,
    title: "Commercial Cleaning",
    description: "Your office is an extension of your brand. Night or early-morning service keeps operations seamless. Low-scent, eco-certified products support wellness policies, and a signed inspection sheet awaits you at reception after every visit.",
  },
  {
    icon: <Truck className="w-6 h-6 text-blue-600" />,
    title: "Move-In / Move-Out & Post-Build Deep Cleaning",
    description: "We do move-in / move-out cleaning for property managers, landlords, and builders who need flawless turnovers. From move-out resets and move-in fresh starts to post-construction detailing and seasonal deep cleans, we scrub appliances, cabinets, baseboards, vents, and more so every unit is hand-over-ready.",
  },
  {
    icon: <Star className="w-6 h-6 text-blue-600" />,
    title: "Airbnb Turnover Cleaning",
    description: "Five-star reviews start with spotless rooms. We change linens, restock essentials, photograph every room, and text you proof of completion before the next guest arrives. Odour-neutral plant enzymes eliminate cooking and pet smells without chemical residue. Entirely eco-friendly and organic products for all your five-star needs!",
  },
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600" />,
    title: "Real-Estate Listing and Staging Cleans",
    description: "Homes that sparkle sell faster and for more. We handle pre-photography dusting, streak-free floor treatment, and on-call touch-ups between showings so every viewing feels like the first.",
  },
];

// Services and Details Section Component
const ServicesAndDetailsSection = () => {
  const generalDetails = [
    "Live Immaculately, $50/hr (2-hour minimum)",
    "Bonded and insured Cleaner",
  ];

  const founderStory = "kingdomcleen founder Justine has been a Calgary cleaner, working with some of the city's most elite home builders and owners. She uses organic cleaning products and prides herself on the fact that a baby could eat off the floor after she's done. kingdomcleenClean is bonded and insured.";
  const serviceScope = "kingdomcleen does residential cleaning, commercial cleaning, and move-in and move-out cleans in Calgary and the greater region.";

  return (
    <section id="details" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* General Info */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">Our Commitment to Cleanliness</h2>
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {generalDetails.map((detail, index) => (
              <span key={index} className="inline-flex items-center px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full">
                <CheckCircle className="w-4 h-4 mr-2" />
                {detail}
              </span>
            ))}
          </div>
          <p className="text-lg text-gray-600 mb-4">
            {founderStory}
          </p>
          <p className="text-xl text-gray-700">
            {serviceScope}
          </p>
        </div>

        <hr className="mb-16 border-blue-200" />

        {/* Detailed Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {serviceData.map((service, index) => (
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

              {service.footer && (
                <p className="text-sm italic text-gray-500 border-t pt-2 mt-4">{service.footer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Hero Section Component
const HeroSectionContent = () => {
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
          alt="Clean team illustration"
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
            Calgary Cleaning Services
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Bonded and Insured Calgary Cleaner Using Organic Cleaning Products
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

// Main HomePage Export
export function HomePage() {
  return (
    <>
      <HeroSectionContent />
      <ServicesAndDetailsSection />
    </>
  );
}