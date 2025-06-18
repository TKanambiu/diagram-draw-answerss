
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface VisaApplicationFormProps {
  visaType: string;
  onBack: () => void;
}

const VisaApplicationForm = ({ visaType, onBack }: VisaApplicationFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    passportNumber: "",
    dateOfBirth: "",
    travelDate: "",
    duration: "",
    purpose: "",
    hotelName: "",
    additionalInfo: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Visa application submitted:", { visaType, ...formData });
    
    toast({
      title: "Application Submitted Successfully!",
      description: "We'll review your application and contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      nationality: "",
      passportNumber: "",
      dateOfBirth: "",
      travelDate: "",
      duration: "",
      purpose: "",
      hotelName: "",
      additionalInfo: ""
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Button
          onClick={onBack}
          variant="outline"
          className="mb-4 flex items-center space-x-2"
        >
          <ArrowLeft size={16} />
          <span>Back to Visa Types</span>
        </Button>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {visaType.replace("-", " ").toUpperCase()} Application
        </h2>
        <p className="text-gray-600">
          Please fill out all required information for your visa application.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            
            <div>
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="nationality">Nationality *</Label>
              <Input
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="passportNumber">Passport Number *</Label>
              <Input
                id="passportNumber"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="dateOfBirth">Date of Birth *</Label>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
          </div>

          {/* Travel Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Travel Information</h3>
            
            <div>
              <Label htmlFor="travelDate">Intended Travel Date *</Label>
              <Input
                id="travelDate"
                name="travelDate"
                type="date"
                value={formData.travelDate}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="duration">Duration of Stay *</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-7">1-7 days</SelectItem>
                  <SelectItem value="8-14">8-14 days</SelectItem>
                  <SelectItem value="15-30">15-30 days</SelectItem>
                  <SelectItem value="31-90">31-90 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="purpose">Purpose of Visit *</Label>
              <Select>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tourism">Tourism</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="transit">Transit</SelectItem>
                  <SelectItem value="family">Family Visit</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="hotelName">Hotel/Accommodation Name</Label>
              <Input
                id="hotelName"
                name="hotelName"
                value={formData.hotelName}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Hotel name or address"
              />
            </div>

            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                className="mt-1"
                rows={4}
                placeholder="Any additional information or special requests..."
              />
            </div>
          </div>
        </div>

        {/* Required Documents Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-900 mb-2">Required Documents</h4>
          <p className="text-blue-800 text-sm mb-3">
            After submitting this form, you'll need to provide the following documents:
          </p>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• Passport copy (minimum 6 months validity)</li>
            <li>• Passport-sized photographs (white background)</li>
            <li>• Bank statements (last 3 months)</li>
            <li>• Travel insurance certificate</li>
            <li>• Return flight tickets</li>
            <li>• Hotel booking confirmation</li>
          </ul>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-6">
          <Button
            type="submit"
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-3"
          >
            Submit Application
          </Button>
        </div>
      </form>
    </div>
  );
};

export default VisaApplicationForm;
