
import Navigation from "@/components/Navigation";
import WhatsAppChat from "@/components/WhatsAppChat";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
              About Emirates Dubai Travel
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c" 
                  alt="Dubai skyline" 
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Your Gateway to Dubai's Wonders
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Emirates Dubai Travel is your premier destination management company, 
                  specializing in creating unforgettable experiences in the magnificent 
                  city of Dubai and throughout the United Arab Emirates.
                </p>
                <p className="text-lg text-gray-700">
                  With years of expertise in luxury tourism, we craft personalized 
                  journeys that showcase the best of Dubai's modern marvels, cultural 
                  heritage, and exclusive experiences.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg">
                <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Happy Travelers</h3>
                <p className="text-gray-600">Satisfied customers from around the world</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg">
                <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tour Packages</h3>
                <p className="text-gray-600">Carefully curated experiences</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
                <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Support</h3>
                <p className="text-gray-600">Round-the-clock customer assistance</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg">
                To provide exceptional travel experiences that create lasting memories, 
                while showcasing the beauty, culture, and innovation that makes Dubai 
                a world-class destination. We believe every journey should be as unique 
                as the traveler themselves.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default About;
