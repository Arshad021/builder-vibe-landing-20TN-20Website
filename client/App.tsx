import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import DigitalTransmissions from "./pages/DigitalTransmissions";
import ECommerceSuite from "./pages/ECommerceSuite";
import DataAnalytics from "./pages/DataAnalytics";
import CustomerExperience from "./pages/CustomerExperience";
import Header from "./components/site/Header";
import Footer from "./components/site/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/digital-transmissions" element={<DigitalTransmissions />} />
              <Route path="/p/ecommerce" element={<ECommerceSuite />} />
              <Route path="/p/analytics" element={<DataAnalytics />} />
              <Route path="/p/customer-experience" element={<CustomerExperience />} />
              <Route path="/p/:slug" element={<Placeholder />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
