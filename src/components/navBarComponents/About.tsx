// pages/about.tsx
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          About Us
        </h1>

        {/* Section for Image and Content */}
        <div className="flex items-center justify-between space-x-8">
          {/* Image Section with Mask */}
          <div className="relative w-full sm:w-1/2 h-[400px]">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <Image
                src="/path/to/your/image.jpg" // Replace with actual image path
                alt="About Us Image"
                layout="fill"
                objectFit="cover"
                className="transition-transform transform group-hover:scale-110"
              />
            </div>
            {/* Mask Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40 rounded-lg"></div>
          </div>

          {/* Content Section */}
          <div className="w-full sm:w-1/2 space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to our blog! We are a team of passionate individuals who
              believe in sharing knowledge and experiences with the world. Our blog
              covers a variety of topics ranging from technology, lifestyle, and
              personal growth. Whether you are here for tips, inspiration, or just to
              learn something new, we hope you find something that resonates with you.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700">
              Our mission is to create a space where we can share valuable
              information that can help people grow, learn, and be inspired. We
              aim to provide high-quality content that is both informative and
              engaging, to help our readers make informed decisions and improve
              their lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
