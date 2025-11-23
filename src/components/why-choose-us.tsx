import { useEffect, useState } from "react";
import { Award, Users, Leaf, Clock, Shield, ThumbsUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  {
    icon: Award,
    title: "Personnel Qualifié & Vérifié",
    description: "Équipe formée, certifiée et soumise à des vérifications d'antécédents approfondies.",
  },
  {
    icon: Users,
    title: "Solutions Personnalisées",
    description: "Plans de nettoyage sur mesure adaptés aux besoins spécifiques de votre entreprise.",
  },
  {
    icon: Leaf,
    title: "Équipement Écologique",
    description: "Produits de nettoyage respectueux de l'environnement et sans danger pour la santé.",
  },
  {
    icon: Clock,
    title: "Disponibilité Flexible",
    description: "Services disponibles 24/7 pour s'adapter à vos horaires d'activité.",
  },
  {
    icon: Shield,
    title: "Assurance Complète",
    description: "Couverture d'assurance totale pour votre tranquillité d'esprit.",
  },
  {
    icon: ThumbsUp,
    title: "Garantie Satisfaction",
    description: "Nous ne sommes satisfaits que lorsque vous l'êtes. Garantie 100%.",
  },
];

const stats = [
  { number: 30, suffix: "+", label: "Ans d'Expérience" },
  { number: 1000, suffix: "+", label: "Clients Satisfaits" },
  { number: 50, suffix: "+", label: "Professionnels" },
  { number: 99, suffix: "%", label: "Taux de Satisfaction" },
];

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            Pourquoi Nous Choisir
          </div>
          <h2 className="text-gray-900 mb-4">
            L'Excellence au Service de Votre Entreprise
          </h2>
          <p className="text-gray-600">
            Faites confiance à notre expertise et notre engagement pour des résultats impeccables à chaque intervention.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-white mb-2">
                  <AnimatedCounter end={stat.number} />
                  {stat.suffix}
                </div>
                <div className="text-blue-100">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          <div className="rounded-2xl overflow-hidden h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1752250301247-94222c5a1850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHRlYW18ZW58MXx8fHwxNzYyOTcwODkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Professional cleaning team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden h-[400px]">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1744663835766-0f9970e7aa65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjI4Nzk3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Commercial building interior"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
