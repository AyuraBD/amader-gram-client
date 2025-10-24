import { FaEnvelope, FaFacebookF, FaLocationArrow, FaTwitter, FaYoutube } from "react-icons/fa"
import { Link } from "react-router"

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="bg-primary py-8">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Village Info */}
          <div className="py-10">
            <h3 className="text-xl font-bold mb-2">About Our Village</h3>
            <p className="text-sm text-gray-200">
              Connecting our community through technology. Stay informed, get involved, and support one another.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="/notices" className="hover:underline">Notices</a></li>
              <li><a href="/events" className="hover:underline">Events</a></li>
              <li><a href="/jobs" className="hover:underline">Job Posts</a></li>
              <li><a href="/institutions" className="hover:underline">Schools & Mosques</a></li>
              <li><a href="/donate" className="hover:underline">Donate</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-200 mb-2 flex items-center gap-2"><FaLocationArrow></FaLocationArrow>West Shaheb Nagar, Parshuram, Feni Chittagong, Bangladesh</p>
            <p className="text-sm text-gray-200 mb-4 flex items-center gap-2"> <FaEnvelope></FaEnvelope> amadergram@gmail.com</p>
            <div className="flex gap-4">
              <Link to="#" className="text-white hover:text-gray-300"><FaFacebookF /></Link>
              <Link to="#" className="text-white hover:text-gray-300"><FaTwitter /></Link>
              <Link to="#" className="text-white hover:text-gray-300"><FaYoutube /></Link>
              <Link to="mailto:amadergram@gmail.com" className="text-white hover:text-gray-300"><FaEnvelope /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-primary py-4 text-center text-sm text-gray-300 border-t border-light/20">
        &copy; {new Date().getFullYear()} Amader Gram. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer