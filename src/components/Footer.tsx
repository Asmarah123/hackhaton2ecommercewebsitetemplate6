export default function Footer() {
    return (
      <>
        <footer className="bg-gray-100 py-8 border-t-2 border-gray-300">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Branding Section */}
            <div className="space-y-3">
              <h2 className="font-bold text-2xl text-gray-800">Asmarah</h2>
              <p className="text-gray-600">
                University Governor Sindh Kamran Khan Tessori, Saddar Karachi
              </p>
            </div>
  
            {/* Navbar Section */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Navbar</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
  
            {/* Help Section */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Help</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Privacy Policies</li>
              </ul>
            </div>
  
            {/* Newsletter Section */}
            <div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3">Newsletter</h4>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full sm:w-auto flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
                <button
                  type="submit"
                  className="bg-gray-800 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-700 transition"
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="mt-8 border-t border-gray-300 pt-4 text-center text-gray-600 text-sm">
            <p>2023 Asmarah. All rights reserved</p>
          </div>
        </footer>
      </>
    );
  }
  