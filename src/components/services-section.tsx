import { Building2, Sparkles, Droplets, Hammer, Wind, Shield } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Nettoyage de Bureau",
    description: "Entretien quotidien de vos espaces de travail pour un environnement professionnel et accueillant.",
  },
  {
    icon: Hammer,
    title: "Nettoyage Industriel",
    description: "Solutions adaptées aux entrepôts, usines et sites industriels avec équipement spécialisé.",
  },
  {
    icon: Sparkles,
    title: "Nettoyage de Vitres",
    description: "Vitres étincelantes pour une image professionnelle impeccable de votre entreprise.",
  },
  {
    icon: Droplets,
    title: "Nettoyage en Profondeur",
    description: "Désinfection complète et nettoyage approfondi pour un environnement sain et hygiénique.",
  },
  {
    icon: Wind,
    title: "Entretien des Sols",
    description: "Traitement, polissage et entretien de tous types de revêtements de sol.",
  },
  {
    icon: Shield,
    title: "Désinfection Sanitaire",
    description: "Protocoles de désinfection avancés pour garantir la sécurité de vos équipes.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            Nos Services
          </div>
          <h2 className="text-gray-900 mb-4">
            Solutions Complètes de Nettoyage Commercial
          </h2>
          <p className="text-gray-600">
            Des services professionnels adaptés à tous vos besoins de nettoyage commercial, avec une qualité garantie.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
