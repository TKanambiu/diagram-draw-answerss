
import { useState } from "react";
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Emirates Dubai Travel
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to start your Dubai adventure? Get in touch with our travel experts 
              who are here to help you plan the perfect trip.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Numbers</h3>
                    <p className="text-gray-600">+971 56 872 3633</p>
                    <p className="text-gray-600">+971 50 598 8436</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600">info@emiratesdubaitravel.com</p>
                    <p className="text-gray-600">bookings@emiratesdubaitravel.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-600">
                      Dubai Marina Walk<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 8:00 PM<br />
                      Saturday - Sunday: 10:00 AM - 6:00 PM<br />
                      <span className="text-blue-600 font-semibold">24/7 WhatsApp Support</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Find Us</h3>
                <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <p className="text-gray-600">Interactive Map - Dubai Marina Location</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in tour packages?</h3>
                <p className="text-gray-600">Our packages typically include transportation, guided tours, entrance fees, and refreshments. Specific inclusions vary by package.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How far in advance should I book?</h3>
                <p className="text-gray-600">We recommend booking at least 3-7 days in advance, especially during peak tourist seasons and holidays.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide hotel transfers?</h3>
                <p className="text-gray-600">Yes, we offer complimentary hotel transfers for most of our tour packages within Dubai city limits.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What's your cancellation policy?</h3>
                <p className="text-gray-600">Cancellations made 24 hours before the tour date are eligible for a full refund. Please check specific package terms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Contact;
