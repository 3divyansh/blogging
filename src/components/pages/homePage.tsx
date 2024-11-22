// pages/index.tsx
import Image from 'next/image'
import { getBlogs } from "@/lib/sanity/utils"
import { Any } from 'next-sanity';

export default async function homePage() {
  const blogs = await getBlogs();

  console.log(blogs);

  
  const blogData = blogs.map((blog: Any) => ({
    title: blog.title || 'Blog Post Title',
    description: blog.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: {
      url: blog.thumbnail || '/path/to/default/image.jpg', 
       
    }
  }));

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-pink-600 mb-12">
          Latest Blog Posts
        </h2>

        {/* Blog Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogData.map((blog, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl hover:cursor-pointer ${
                index % 3 === 1 ? 'h-[500px]' : 'h-[400px]' // Middle card with larger height
              }`}
            >
              {/* Image Section */}
              <div className="relative w-full h-2/3">
                <img
                  src={blog.image.url}
                  alt=''
                  className="transition-transform group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-30 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
