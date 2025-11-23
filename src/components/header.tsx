import { useState } from "react";
import { Menu, X } from "lucide-react";
import { PageType } from "../App";

// Importez votre logo (assurez-vous que c'est la version sans fond ou avec fond blanc selon votre préférence)
import logo from "../assets/logo.png"; 

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // 1. NAVBAR PLUS HAUTE : h-28 (112px) au lieu de h-20
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 h-28 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full relative">
          
          {/* --- LOGO SECTION --- */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavigation("home")}
          >
            <img 
              src={logo} 
              alt="King Cleaning Logo" 
              // 2. LOGO AGRANDI : h-24 (96px) pour mobile, h-24 pour desktop
              // Cela remplit presque toute la hauteur de la navbar (112px)
              className="h-20 w-auto object-contain transition-all duration-300" 
            />
          </div>
          {/* -------------------- */}

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 ml-auto">
            <button
              onClick={() => handleNavigation("home")}
              className={`text-lg font-medium transition-colors ${
                currentPage === "home" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("house-cleaning")}
              className={`text-lg font-medium transition-colors ${
                currentPage === "house-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              House Cleaning
            </button>
            <button
              onClick={() => handleNavigation("condo-cleaning")}
              className={`text-lg font-medium transition-colors ${
                currentPage === "condo-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Condo Cleaning
            </button>
            <button
              onClick={() => handleNavigation("move-out-cleaning")}
              className={`text-lg font-medium transition-colors ${
                currentPage === "move-out-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Move Out Cleaning
            </button>
            <button
              onClick={() => handleNavigation("commercial-cleaning")}
              className={`text-lg font-medium transition-colors ${
                currentPage === "commercial-cleaning" ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
              }`}
            >
              Commercial Cleaning
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 ml-auto"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8 text-gray-900" />
            ) : (
              <Menu className="w-8 h-8 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          // Ajustement du 'top' pour correspondre à la nouvelle hauteur de la navbar (top-28)
          <div className="md:hidden py-4 border-t bg-white absolute left-0 right-0 top-28 shadow-lg h-screen z-40">
            <nav className="flex flex-col gap-4 px-6 pt-4">
              <button
                onClick={() => handleNavigation("home")}
                className={`text-left p-3 rounded-md text-lg transition-colors ${
                  currentPage === "home" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("house-cleaning")}
                className={`text-left p-3 rounded-md text-lg transition-colors ${
                  currentPage === "house-cleaning" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                House Cleaning
              </button>
              <button
                onClick={() => handleNavigation("condo-cleaning")}
                className={`text-left p-3 rounded-md text-lg transition-colors ${
                  currentPage === "condo-cleaning" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Condo Cleaning
              </button>
              <button
                onClick={() => handleNavigation("move-out-cleaning")}
                className={`text-left p-3 rounded-md text-lg transition-colors ${
                  currentPage === "move-out-cleaning" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Move Out Cleaning
              </button>
              <button
                onClick={() => handleNavigation("commercial-cleaning")}
                className={`text-left p-3 rounded-md text-lg transition-colors ${
                  currentPage === "commercial-cleaning" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                Commercial Cleaning
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}