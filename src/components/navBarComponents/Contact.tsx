"use client"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
const Contact = () => {
	const [isMounted, setIsMounted] = useState(false); // Check for client-side rendering
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true); // Only set true when the component is mounted on the client
  }, []);

  const handleClose = () => {
    if (isMounted) {
      router.back();
    }
  };;


  const [formData , setFormData] = useState({
    message: "",
    email: "",
    phone : "",

  });


  const [error , setError] = useState({
    message: "",
    email: "",
    phone : ""

  })


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target) {
      const { name, value } = e.target; 
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
      setError(prevError => ({
        ...prevError,
        [name]: "", 
      }));
    }
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
            <form>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
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
              className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition "
              onClick={() => alert("Message Sent!")}
            >
              Send Message
            </button>
            </form>
          </div>
     
        </div>
       
    </>
  
)};

export default Contact;
