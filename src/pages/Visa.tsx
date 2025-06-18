
import { useState } from "react";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";
import VisaApplicationForm from "@/components/VisaApplicationForm";
import { Button } from "@/components/ui/button";

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
      features: ["Single entry", "Tourist activities", "Shopping", "Sightseeing"]
    },
    {
      id: "tourist-90",
      name: "90-Day Tourist Visa",
      description: "Extended stay for longer explorations",
      validity: "90 days",
      processing: "3-7 working days",
      features: ["Multiple entry", "Extended tourism", "Business meetings", "Family visits"]
    },
    {
      id: "transit",
      name: "Transit Visa",
      description: "For travelers passing through Dubai",
      validity: "48-96 hours",
      processing: "1-2 working days",
      features: ["Airport transit", "Short city tours", "Hotel accommodation", "Quick processing"]
    },
    {
      id: "business",
      name: "Business Visa",
      description: "For business meetings and conferences",
      validity: "30-90 days",
      processing: "5-7 working days",
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
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              UAE Visa Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fast, reliable, and hassle-free visa processing for your Dubai and UAE travel. 
              We handle all the paperwork so you can focus on planning your amazing journey.
            </p>
          </div>

          {!showForm ? (
            <>
              {/* Visa Types */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {visaTypes.map((visa) => (
                  <div key={visa.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{visa.name}</h3>
                    <p className="text-gray-600 mb-4">{visa.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Validity:</span>
                        <span className="text-sm font-semibold text-gray-900">{visa.validity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-500">Processing:</span>
                        <span className="text-sm font-semibold text-gray-900">{visa.processing}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {visa.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
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

              {/* Requirements Section */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                  General Requirements
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Steps */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Simple Application Process</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Visa Type</h3>
                    <p className="text-gray-600">Select the visa that matches your travel purpose</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Application</h3>
                    <p className="text-gray-600">Fill out the form with your travel details</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Document Review</h3>
                    <p className="text-gray-600">Our experts review and process your application</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive Visa</h3>
                    <p className="text-gray-600">Get your approved visa via email</p>
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
