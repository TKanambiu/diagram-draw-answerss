
import { useState } from "react";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";
import VisaApplicationForm from "@/components/VisaApplicationForm";
import { Button } from "@/components/ui/button";
import { Plane, CheckCircle, Clock, Users, Shield } from "lucide-react";

const Visa = () => {
  const [selectedVisaType, setSelectedVisaType] = useState("");
  const [showForm, setShowForm] = useState(false);

  const visaTypes = [
    {
      id: "tourist-30",
      name: "30-Day Tourist Visa",
      description: "Perfect for short visits and vacations",
      validity: "30 days",
      processing: "3-5 working days",
      price: "From AED 300",
      features: ["Single entry", "Tourist activities", "Shopping", "Sightseeing"]
    },
    {
      id: "tourist-90",
      name: "90-Day Tourist Visa",
      description: "Extended stay for longer explorations",
      validity: "90 days",
      processing: "3-7 working days",
      price: "From AED 800",
      features: ["Multiple entry", "Extended tourism", "Business meetings", "Family visits"]
    },
    {
      id: "transit",
      name: "Transit Visa",
      description: "For travelers passing through Dubai",
      validity: "48-96 hours",
      processing: "1-2 working days",
      price: "From AED 150",
      features: ["Airport transit", "Short city tours", "Hotel accommodation", "Quick processing"]
    },
    {
      id: "business",
      name: "Business Visa",
      description: "For business meetings and conferences",
      validity: "30-90 days",
      processing: "5-7 working days",
      price: "From AED 1,200",
      features: ["Business activities", "Conference attendance", "Company visits", "Professional meetings"]
    }
  ];

  const requirements = [
    "Valid passport (minimum 6 months validity)",
    "Passport-sized photographs (white background)",
    "Completed visa application form",
    "Travel itinerary and hotel bookings",
    "Bank statements (last 3 months)",
    "Travel insurance certificate",
    "Return flight tickets",
    "Sponsor letter (if applicable)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Professional Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <Plane size={48} className="text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              UAE Visa Services
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Professional visa processing services for your Dubai and UAE travel. 
              We provide fast, reliable, and comprehensive visa solutions with expert guidance 
              throughout the entire application process.
            </p>
          </div>

          {!showForm ? (
            <>
              {/* Key Features */}
              <div className="grid md:grid-cols-4 gap-6 mb-16">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">100% Success Rate</h3>
                  <p className="text-sm text-gray-600">Guaranteed visa approval with our expert handling</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Fast Processing</h3>
                  <p className="text-sm text-gray-600">Quick turnaround times for all visa types</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Expert Support</h3>
                  <p className="text-sm text-gray-600">Dedicated visa specialists at your service</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Secure Process</h3>
                  <p className="text-sm text-gray-600">Confidential and secure document handling</p>
                </div>
              </div>

              {/* Visa Types */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Visa Options</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {visaTypes.map((visa) => (
                    <div key={visa.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold text-gray-900">{visa.name}</h3>
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {visa.price}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6 text-lg">{visa.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <span className="text-sm text-gray-500 block">Validity</span>
                          <span className="text-lg font-semibold text-gray-900">{visa.validity}</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <span className="text-sm text-gray-500 block">Processing</span>
                          <span className="text-lg font-semibold text-gray-900">{visa.processing}</span>
                        </div>
                      </div>

                      <div className="mb-8">
                        <h4 className="font-semibold text-gray-900 mb-3">Included Features</h4>
                        <ul className="space-y-2">
                          {visa.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-lg font-semibold"
                        onClick={() => {
                          setSelectedVisaType(visa.id);
                          setShowForm(true);
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements Section */}
              <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Document Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 font-medium">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Professional Process</h2>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">1</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultation</h3>
                    <p className="text-gray-600">Expert consultation to determine the best visa option for your needs</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">2</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Documentation</h3>
                    <p className="text-gray-600">Complete application form and gather required documents</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">3</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Processing</h3>
                    <p className="text-gray-600">Professional review and submission to authorities</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">4</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Delivery</h3>
                    <p className="text-gray-600">Secure delivery of your approved visa</p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <VisaApplicationForm 
              visaType={selectedVisaType} 
              onBack={() => setShowForm(false)} 
            />
          )}
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Visa;
