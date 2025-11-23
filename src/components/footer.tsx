import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png"; // Assurez-vous que le chemin est correct

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              {/* Conteneur blanc pour le logo */}
              <div className="bg-white p-2 rounded-lg inline-block">
                <img 
                  src={logo} 
                  alt="Kingdom Clean Logo" 
                  // Taille changée en h-20 comme demandé
                  className="h-20 w-auto object-contain" 
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for impeccable commercial spaces for over 30 years.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("why-choose-us")}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Why Choose Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">Office Cleaning</li>
              <li className="text-gray-400">Industrial Cleaning</li>
              <li className="text-gray-400">Window Cleaning</li>
              <li className="text-gray-400">Deep Cleaning</li>
              <li className="text-gray-400">Floor Maintenance</li>
              <li className="text-gray-400">Sanitization</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-gray-400">(438)223-2322</div>
                  <div className="text-gray-500 text-sm">Mon-Sun 24/7</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">kingdomcleen@gmail.com</div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  1338Wellington st.w,<br />
                  ottawa,ONK1Y3B7
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 kingdomcleen. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Legal Notice
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}