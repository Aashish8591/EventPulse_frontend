import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#050816] relative overflow-hidden flex items-center justify-center px-6">

      {/* Background Glow */}

      <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-[120px]" />

      {/* Card */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-xl w-full bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 text-center"
      >

        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <h2 className="text-3xl font-bold text-white mt-6">

          Oops! Page Not Found

        </h2>

        <p className="text-gray-400 mt-5 leading-8">

          The page you're looking for doesn't exist or may have been moved.

        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-semibold text-white hover:scale-105 transition duration-300 shadow-xl"
        >

          <FaHome />

          Back To Home

        </Link>

      </motion.div>

    </div>
  );
};

export default NotFound;