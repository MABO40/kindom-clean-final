import { Button } from "./ui/button";
import { CheckCircle, Star } from "lucide-react";

interface ReusableHeroProps {
  backgroundImage: string;
  badge?: string;
  headline: string;
  subheadline: string;
  ctaButton1Text: string;
  ctaButton1Action: () => void;
  ctaButton2Text: string;
  ctaButton2Action: () => void;
  socialProof?: string[];
}

export function ReusableHero({
  backgroundImage,
  badge,
  headline,
  subheadline,
  ctaButton1Text,
  ctaButton1Action,
  ctaButton2Text,
  ctaButton2Action,
  socialProof = ["Certified Staff", "Eco-Friendly Equipment", "Available 24/7"],
}: ReusableHeroProps) {
  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Service background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white">{badge}</span>
            </div>
          )}

          {/* Headline */}
          <h1 className="text-white mb-6">
            {headline}
          </h1>

          {/* Sub-headline */}
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              onClick={ctaButton1Action}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {ctaButton1Text}
            </Button>
            <Button
              onClick={ctaButton2Action}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            >
              {ctaButton2Text}
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-wrap gap-6 items-center">
            {socialProof.map((proof, index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{proof}</span>
              </div>
            ))}
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
}
