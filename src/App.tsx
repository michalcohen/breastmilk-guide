import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GuidelineProvider } from "@/contexts/GuidelineContext";
import Index from "./pages/Index";
import DirectUse from "./pages/DirectUse";
import Refrigerator from "./pages/Refrigerator";
import Cooler from "./pages/Cooler";
import Freezer from "./pages/Freezer";
import AfterHeating from "./pages/AfterHeating";
import FastThaw from "./pages/FastThaw";
import SlowThaw from "./pages/SlowThaw";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <GuidelineProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/direct-use" element={<DirectUse />} />
            <Route path="/refrigerator" element={<Refrigerator />} />
            <Route path="/cooler" element={<Cooler />} />
            <Route path="/freezer" element={<Freezer />} />
            <Route path="/after-heating" element={<AfterHeating />} />
            <Route path="/fast-thaw" element={<FastThaw />} />
            <Route path="/slow-thaw" element={<SlowThaw />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </GuidelineProvider>
  </QueryClientProvider>
);

export default App;
