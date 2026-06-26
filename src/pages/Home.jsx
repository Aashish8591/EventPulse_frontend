import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaStar,
  FaUsers,
  FaComments,
  FaShieldAlt,
  FaDatabase,
  FaBolt,
  FaChartLine,
} from "react-icons/fa";

import { getAllEvents, getAllFeedback } from "../services/feedbackService";

const Home = () => {
  const [eventCount, setEventCount] = useState(0);
  const [feedbackCount, setFeedbackCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const events = await getAllEvents();

      const feedback = await getAllFeedback();

      setEventCount(events.data.length);

      setFeedbackCount(feedback.data.length);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#050816] text-white">
      {/* Background Glow */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Hero Section */}

      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-14 items-center">
          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-sm mb-6">
              Smart Event Feedback Platform
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Collect
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Event Feedback{" "}
              </span>
              Like Never Before.
            </h1>

            <p className="mt-8 text-lg text-gray-300 leading-8 max-w-xl">
              EventPulse helps organizers collect, manage and analyse feedback
              from attendees through a modern and interactive platform built
              with React, Spring Boot and MySQL.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <Link
                to="/events"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold flex items-center gap-3 hover:scale-105 transition duration-300 shadow-xl"
              >
                Explore Events
                <FaArrowRight />
              </Link>

              <Link
                to="/feedback"
                className="px-8 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl hover:bg-white/20 transition"
              >
                Give Feedback
              </Link>
            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold mb-8">Platform Highlights</h2>

              <div className="space-y-6">
                <div className="flex items-center gap-5 bg-white/5 p-5 rounded-2xl">
                  <div className="bg-cyan-500 p-4 rounded-xl">
                    <FaComments size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Real-time Feedback
                    </h3>

                    <p className="text-gray-400">
                      Submit event feedback instantly.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-white/5 p-5 rounded-2xl">
                  <div className="bg-purple-600 p-4 rounded-xl">
                    <FaUsers size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">User Friendly</h3>

                    <p className="text-gray-400">
                      Easy and intuitive experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5 bg-white/5 p-5 rounded-2xl">
                  <div className="bg-yellow-500 p-4 rounded-xl">
                    <FaStar size={24} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">Event Ratings</h3>

                    <p className="text-gray-400">
                      Rate every event from 1 to 5 stars.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY CHOOSE EVENTPULSE ================= */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold">
              Why Choose
              <span className="text-cyan-400"> EventPulse?</span>
            </h2>

            <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-8">
              A modern platform designed to simplify event feedback collection
              with speed, security and an exceptional user experience.
            </p>
          </motion.div>

          {/* Feature Cards */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
            >
              <div className="bg-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaBolt size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">Fast Feedback</h3>

              <p className="text-gray-400">
                Submit event feedback instantly without complicated steps.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-400 transition duration-300"
            >
              <div className="bg-purple-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaShieldAlt size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">Secure Platform</h3>

              <p className="text-gray-400">
                Built with Spring Boot and MySQL for reliable data storage.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-yellow-400 transition duration-300"
            >
              <div className="bg-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaDatabase size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">Cloud Ready</h3>

              <p className="text-gray-400">
                Easily deploy your application with scalable architecture.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-green-400 transition duration-300"
            >
              <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <FaChartLine size={28} />
              </div>

              <h3 className="text-2xl font-semibold mb-4">Better Insights</h3>

              <p className="text-gray-400">
                Understand attendee satisfaction using collected feedback.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATISTICS ================= */}

      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/20 rounded-3xl text-center p-8"
            >
              <h2 className="text-5xl font-bold text-cyan-400">
                {loading ? "..." : eventCount}
              </h2>

              <p className="mt-3 text-gray-300">Events</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-400/20 rounded-3xl text-center p-8"
            >
              <h2 className="text-5xl font-bold text-purple-400">
                {loading ? "..." : feedbackCount}
              </h2>

              <p className="mt-3 text-gray-300">Feedback</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-400/20 rounded-3xl text-center p-8"
            >
              <h2 className="text-5xl font-bold text-green-400">4.9★</h2>

              <p className="mt-3 text-gray-300">Average Rating</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl border border-orange-400/20 rounded-3xl text-center p-8"
            >
              <h2 className="text-5xl font-bold text-orange-400">24/7</h2>

              <p className="mt-3 text-gray-300">Availability</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}

      <section className="pb-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="rounded-[40px] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur-2xl p-12">
            <div className="text-center">
              <h2 className="text-4xl lg:text-6xl font-bold">
                Ready To Share
                <span className="text-cyan-400"> Your Experience?</span>
              </h2>

              <p className="mt-8 text-gray-300 text-lg max-w-3xl mx-auto leading-8">
                Help organizers improve their events by sharing your valuable
                feedback. Your opinion matters.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mt-12">
                <Link
                  to="/events"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition"
                >
                  Explore Events
                </Link>

                <Link
                  to="/feedback"
                  className="px-8 py-4 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 transition"
                >
                  Submit Feedback
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
