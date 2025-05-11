
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PujaUnveiled from "./pages/PujaUnveiled";
import ParaShowcase from "./pages/ParaShowcase";
import ParaDetail from "./pages/ParaDetail";
import Gallery from "./pages/Gallery";
import PujaSchedule from "./pages/PujaSchedule";
import VisitorsGuide from "./pages/VisitorsGuide";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/puja-unveiled" element={<PujaUnveiled />} />
          <Route path="/para-showcase" element={<ParaShowcase />} />
          <Route path="/para/:paraId" element={<ParaDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/puja-schedule" element={<PujaSchedule />} />
          <Route path="/visitors-guide" element={<VisitorsGuide />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
