import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Marie Dubois",
    company: "TechCorp Solutions",
    role: "Directrice des Opérations",
    rating: 5,
    text: "kingdomcleen a transformé notre espace de travail. Leur professionnalisme et leur attention aux détails sont incomparables. Notre bureau n'a jamais été aussi propre!",
  },
  {
    name: "Ahmed Ben Ali",
    company: "Global Finance Ltd",
    role: "Responsable Facilities",
    rating: 5,
    text: "Service exceptionnel! L'équipe est toujours ponctuelle, efficace et discrète. Nous avons enfin trouvé un partenaire de confiance pour l'entretien de nos bureaux.",
  },
  {
    name: "Sophie Martin",
    company: "MedicalCenter Pro",
    role: "Gestionnaire",
    rating: 5,
    text: "En tant que centre médical, la propreté est primordiale. kingdomcleen respecte tous nos protocoles sanitaires et va au-delà de nos attentes à chaque visite.",
  },
  {
    name: "Jean-Pierre Laurent",
    company: "IndustrialWorks SA",
    role: "Directeur de Site",
    rating: 5,
    text: "Excellente prestation pour notre site industriel. L'équipe utilise du matériel professionnel et des produits écologiques. Je recommande vivement!",
  },
];

const clientLogos = [
  { name: "TechCorp", abbr: "TC" },
  { name: "Global Finance", abbr: "GF" },
  { name: "MedicalCenter", abbr: "MC" },
  { name: "IndustrialWorks", abbr: "IW" },
  { name: "RetailGroup", abbr: "RG" },
  { name: "HotelChain", abbr: "HC" },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            Témoignages
          </div>
          <h2 className="text-gray-900 mb-4">
            Ce Que Nos Clients Disent
          </h2>
          <p className="text-gray-600">
            La satisfaction de nos clients est notre plus grande fierté. Découvrez leurs retours d'expérience.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm relative">
            {/* Quote Icon */}
            <div className="absolute top-8 right-8 opacity-10">
              <Quote className="w-20 h-20 text-blue-600" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 mb-8 relative z-10">
              "{currentTestimonial.text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-900 mb-1">
                  {currentTestimonial.name}
                </div>
                <div className="text-gray-600">
                  {currentTestimonial.role} • {currentTestimonial.company}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="rounded-full"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-blue-600 w-8"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div>
          <p className="text-center text-gray-600 mb-8">
            Ils nous font confiance
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="text-center">
                  <div className="text-2xl text-gray-400 mb-1">
                    {client.abbr}
                  </div>
                  <div className="text-xs text-gray-500">
                    {client.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
