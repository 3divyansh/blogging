import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo or Brand Name */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-xl font-bold">My Blog</h1>
          </div>

          {/* Navigation Links */}
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-pink-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-pink-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-pink-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/Privacy" className="hover:text-pink-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-pink-500 transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.832 9.832 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.384 4.482A13.934 13.934 0 011.671 3.149a4.917 4.917 0 001.523 6.573 4.897 4.897 0 01-2.228-.616c-.054 2.281 1.581 4.415 3.946 4.89a4.904 4.904 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.94 13.94 0 007.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.634A10.012 10.012 0 0024 4.557z" />
              </svg>
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-pink-500 transition-colors"
            >
              <span className="sr-only">Facebook</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.27h3.128V8.587c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.916c-1.504 0-1.796.715-1.796 1.764v2.31h3.59l-.467 3.436h-3.123V24h6.116c.73 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-500 transition-colors"
            >
              <span className="sr-only">Instagram</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C8.74 0 8.332.015 7.053.072 5.775.129 4.644.276 3.676.551 2.715.824 1.89 1.22 1.153 1.857.415 2.495-.016 3.276.071 4.623.157 5.97.147 6.357.147 12c0 5.643.01 6.03-.076 7.377-.087 1.347-.486 2.128-1.116 2.765-.63.637-1.41 1.03-2.758 1.116-1.347.087-1.734.076-7.377.076-5.643 0-6.03-.01-7.377-.076C.597 22.235-.184 21.836-.821 21.206-.637 20.566-.24 19.785-.153 18.439.067 17.092.077 16.705.077 12c0-5.643-.01-6.03.076-7.377.087-1.347.486-2.128 1.116-2.765.63-.637 1.41-1.03 2.758-1.116C6.23.077 6.617.067 12 .067c5.383 0 5.77.01 7.117.076 1.347.087 2.128.486 2.765 1.116.637.63 1.03 1.41 1.116 2.758.066 1.347.076 1.734.076 7.377 0 5.383-.01 5.77-.076 7.117-.087 1.347-.486 2.128-1.116 2.765-.63.637-1.41 1.03-2.758 1.116-1.347.087-1.734.076-7.377.076-5.643 0-6.03-.01-7.377-.076-1.347-.087-2.128-.486-2.765-1.116-.637-.63-1.03-1.41-1.116-2.758-.066-1.347-.076-1.734-.076-7.377 0-5.383.01-5.77.076-7.117.087-1.347.486-2.128 1.116-2.765.63-.637 1.41-1.03 2.758-1.116C5.97.087 6.357.077 12 .077c5.643 0 6.03.01 7.377.076 1.347.087 2.128.486 2.765 1.116.637.63 1.03 1.41 1.116 2.758.066 1.347.076 1.734.076 7.377 0 5.383-.01 5.77-.076 7.117-.087 1.347-.486 2.128-1.116 2.765-.63.637-1.41 1.03-2.758 1.116-1.347.087-1.734.076-7.377.076-5.643 0-6.03-.01-7.377-.076-1.347-.087-2.128-.486-2.765-1.116-.637-.63-1.03-1.41-1.116-2.758-.066-1.347-.076-1.734-.076-7.377 0-5.383.01-5.77.076-7.117.087-1.347.486-2.128 1.116-2.765.63-.637 1.41-1.03 2.758-1.116 1.347-.087 1.734-.076 7.377-.076zM12 5.838a6.164 6.164 0 016.162 6.162A6.164 6.164 0 0112 18.162 6.164 6.164 0 015.838 12 6.164 6.164 0 0112 5.838zm0 2.324a3.839 3.839 0 103.838 3.838A3.839 3.839 0 0012 8.162zm6.406-.588a1.337 1.337 0 11-1.337-1.337 1.337 1.337 0 011.337 1.337z" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="text-center mt-4 text-sm text-gray-400">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
