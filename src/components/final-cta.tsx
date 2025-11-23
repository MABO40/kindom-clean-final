import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success("Demande envoyée avec succès!", {
      description: "Nous vous contacterons dans les 24 heures.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - CTA Content */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
              Contactez-Nous
            </div>
            <h2 className="text-gray-900 mb-4">
              Prêt(e) Pour Un Espace Impeccable?
            </h2>
            <p className="text-gray-600 mb-8">
              Demandez votre devis gratuit dès aujourd'hui et découvrez comment nous pouvons transformer vos espaces commerciaux.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Téléphone</div>
                  <div className="text-gray-600">+33 1 23 45 67 89</div>
                  <div className="text-gray-600">Disponible 24/7</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Email</div>
                  <div className="text-gray-600">contact@kingdomclean.fr</div>
                  <div className="text-gray-600">info@kingdomclean.fr</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Adresse</div>
                  <div className="text-gray-600">123 Avenue des Champs-Élysées</div>
                  <div className="text-gray-600">75008 Paris, France</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <h3 className="text-gray-900 mb-6">
              Demandez Votre Devis Gratuit
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Nom complet *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Jean Dupont"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="jean.dupont@entreprise.fr"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="service">Type de service *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Sélectionnez un service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bureau">Nettoyage de Bureau</SelectItem>
                    <SelectItem value="industriel">Nettoyage Industriel</SelectItem>
                    <SelectItem value="vitres">Nettoyage de Vitres</SelectItem>
                    <SelectItem value="profondeur">Nettoyage en Profondeur</SelectItem>
                    <SelectItem value="sols">Entretien des Sols</SelectItem>
                    <SelectItem value="desinfection">Désinfection Sanitaire</SelectItem>
                    <SelectItem value="autre">Autre / Plusieurs services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Décrivez vos besoins en nettoyage..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                <Send className="w-4 h-4 mr-2" />
                Envoyer la Demande
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Nous vous répondrons dans les 24 heures
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
