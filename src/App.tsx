import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HexBackground from "@/components/features/HexBackground";
import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import Studio from "@/pages/Studio";
import Analytics from "@/pages/Analytics";
import Automation from "@/pages/Automation";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-void relative" style={{ background: "#050510" }}>
        <HexBackground />
        <div className="relative" style={{ zIndex: 1 }}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/studio" element={<Studio />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/automation" element={<Automation />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
      <Toaster richColors position="bottom-right" theme="dark" />
    </BrowserRouter>
  );
}
