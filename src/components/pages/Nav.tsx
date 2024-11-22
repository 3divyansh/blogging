"use client"
import Link from 'next/link';
 



export default function Nav() {
	
	
	
	

  return (
	<div className=" bg-gray-50">
	<nav className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mx-4 mt-4">
	
	  <div className="text-xl font-bold text-pink-500">
	    My Blog
	  </div>
 
	
	  <ul className="flex space-x-6">
	    <li>
	     
		 <Link href="/" className="text-lg text-gray-800 hover:text-gray-600 hover:border-b-2 hover:border-pink-500 transition-all px-2 py-1 rounded-lg">
		   Home
		 </Link>
		
	    </li>
	    <li>
	      
		 <Link href="/about" className="text-lg text-gray-800 hover:text-gray-600 hover:border-b-2 hover:border-pink-500 transition-all px-2 py-1 rounded-lg"  >
		
		   About
		 </Link>
		
	    </li>
	    <li>
	      
		 <Link href="/contact" className="text-lg text-gray-800 hover:text-gray-600 hover:border-b-2 hover:border-pink-500 transition-all px-2 py-1 rounded-lg"  >
		   Contact
		   
		 </Link>
	  
	    </li>
	  </ul>
 
	  <div>
		<Link href={"/login"}>
		<button  className="text-white bg-pink-500 hover:bg-pink-600 px-6 py-2 rounded-full transition-colors">
	      Login
	    </button>
		</Link>
	   
	  </div>
	</nav>
     </div>
   
  )
}
