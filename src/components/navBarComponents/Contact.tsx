"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
const Contact = () => {
	const [isMounted, setIsMounted] = useState(false); 
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); 
  }, []);

  const handleClose = () => {
    if (isMounted) {
      router.back();
    }
  };;


  const [formData, setFormData] = useState({
    message: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState({
    message: "",
    email: "",
    phone: "",
  });

  const validateInput = (name: string, value: string): string => {
    switch (name) {
      case "message":
        return value.trim() === "" ? "Message is required" : "";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? "Enter a valid email address" : "";
      case "phone":
        const phoneRegex = /^[0-12]{10}$/;
        return !phoneRegex.test(value) ? "Enter a valid 10-digit phone number" : "";
      default:
        return "";
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log(name);
    
    setFormData((prev) => ({ ...prev, [name]: value }));

    const errorMessage = validateInput(name, value);
    setError((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      message: validateInput("message", formData.message),
      email: validateInput("email", formData.email),
      phone: validateInput("phone", formData.phone),




     
    
    };

    setError(newErrors);

  
    // if (Object.values(newErrors).some((error) => error !== "")) {
    //   console.log("Form has validation errors:", newErrors);
    //   return;
    // }

   
    console.log("Form Submitted Successfully:", formData);
    alert("Form submitted successfully!");



    setFormData({ message: "", email: "", phone: "" });
  };



  


  return (
    <>
  
     
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
         
         <div
            className="bg-white w-11/12 md:w-2/3 lg:w-1/3 max-h-[70vh] p-6 rounded-lg shadow-lg overflow-auto"
            role="dialog"
          >
        
            <button
             onClick={handleClose}
              className="text-gray-800 hover:text-red-800 absolute -right-1/2 -left-80 text-2xl font-bold  "
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
            {/* Message Box */}
            <form 
            onSubmit={handleSubmit}
            >
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                   ${
              error.message ? "border-red-500" : "border-gray-300"
            }
                  `}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                   ${
              error.email ? "border-red-500" : "border-gray-300"
            }
                  `}
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className={`w-full border rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500
                   ${
              error.phone ? "border-red-500" : "border-gray-300"
            }
                  `}
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Submit Button */}
            <button
           type="submit"
              className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition "
             
            >
              Send Message
            </button>
            </form>
          </div>
     
        </div>
       
    </>
  
)};

export default Contact;
