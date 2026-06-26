import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-xl shadow-lg">
                <MdEventAvailable className="text-2xl text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  EventPulse
                </h2>

                <p className="text-gray-400 text-sm">
                  Smart Event Feedback Platform
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-7">
              Collect event feedback in a modern and professional way. Built
              using React, Tailwind CSS, Spring Boot and MySQL.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Home
              </Link>

              <Link
                to="/events"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Events
              </Link>

              <Link
                to="/feedback"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                Feedback
              </Link>

              <Link
                to="/view-feedback"
                className="text-gray-400 hover:text-cyan-400 transition"
              >
                View Feedback
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">Contact</h3>

            <div className="space-y-3 text-gray-400">
              <p>Mumbai, Maharashtra</p>

              <p>support@eventpulse.com</p>

              <p>+91 8591060961</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 text-white">Connect</h3>

            <div className="flex gap-4">
              <a
                href="https://github.com/Aashish8591"
                className="bg-white/10 hover:bg-cyan-500 transition p-3 rounded-full"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/aashish-patil-cs/"
                className="bg-white/10 hover:bg-blue-600 transition p-3 rounded-full"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://www.instagram.com/aashish._.patilll/"
                className="bg-white/10 hover:bg-pink-500 transition p-3 rounded-full"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="aashish2144@gmail.com"
                className="bg-white/10 hover:bg-red-500 transition p-3 rounded-full"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} EventPulse. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2 text-gray-400">
            Made with
            <FaHeart className="text-red-500 animate-pulse" />
            using React & Spring Boot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
