import { useState } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HomePage } from "./components/pages/home-page";
import { HouseCleaningPage } from "./components/pages/house-cleaning-page";
import { CondoCleaningPage } from "./components/pages/condo-cleaning-page";
import { MoveOutCleaningPage } from "./components/pages/move-out-cleaning-page";
import { CommercialCleaningPage } from "./components/pages/commercial-cleaning-page";

export type PageType = "home" | "house-cleaning" | "condo-cleaning" | "move-out-cleaning" | "commercial-cleaning";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "house-cleaning":
        return <HouseCleaningPage />;
      case "condo-cleaning":
        return <CondoCleaningPage />;
      case "move-out-cleaning":
        return <MoveOutCleaningPage />;
      case "commercial-cleaning":
        return <CommercialCleaningPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}