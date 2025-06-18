
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import Services from "@/components/Services";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <FeaturedTours />
      <Services />
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
