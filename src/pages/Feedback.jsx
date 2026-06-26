import { useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import { saveFeedback } from "../services/feedbackService";

const Feedback = () => {
  const location = useLocation();

  const selectedEvent = location.state?.event;

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",

    email: "",

    eventName: selectedEvent?.title || "",

    rating: "",

    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,

      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.eventName ||
      !formData.rating ||
      !formData.comment
    ) {
      setMessage("Please fill all fields.");

      return;
    }

    try {
      setLoading(true);

      await saveFeedback(formData);

      setMessage("Feedback submitted successfully!");

      setFormData({
        name: "",

        email: "",

        eventName: selectedEvent?.title || "",

        rating: "",

        comment: "",
      });
    } catch (error) {
      console.error(error);

      setMessage("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      {/* Background Blur */}

      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">
            Event
            <span className="text-cyan-400"> Feedback</span>
          </h1>

          <p className="mt-5 text-gray-400">
            Share your experience and help organizers improve future events.
          </p>
        </motion.div>

        {/* Form */}

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-14 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-12"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Name */}

            <div>
              <label className="block mb-2 font-medium">Full Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-white/10 focus:border-cyan-400 outline-none"
              />
            </div>

            {/* Email */}

            <div>
              <label className="block mb-2 font-medium">Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-white/10 focus:border-cyan-400 outline-none"
              />
            </div>

            {/* Event Name */}

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Event Name</label>

              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                readOnly
                className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-white/10 cursor-not-allowed"
              />
            </div>

            {/* Rating */}

            <div>
              <label className="block mb-2 font-medium">Rating</label>

              <select
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-white/10 focus:border-cyan-400 outline-none"
              >
                <option value="">Select Rating</option>
                <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
                <option value="4">⭐⭐⭐⭐ Very Good</option>
                <option value="3">⭐⭐⭐ Good</option>
                <option value="2">⭐⭐ Fair</option>
                <option value="1">⭐ Poor</option>
              </select>
            </div>

            {/* Comment */}

            <div className="md:col-span-2">
              <label className="block mb-2 font-medium">Your Feedback</label>

              <textarea
                rows="6"
                name="comment"
                value={formData.comment}
                onChange={handleChange}
                placeholder="Write your feedback..."
                className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-white/10 focus:border-cyan-400 outline-none resize-none"
              ></textarea>
            </div>
          </div>

          {/* Success / Error Message */}

          {message && (
            <div
              className={`mt-6 text-center rounded-xl py-3 font-medium ${
                message.includes("successfully")
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {message}
            </div>
          )}

          {/* Submit Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 font-semibold text-lg hover:scale-[1.02] transition duration-300 disabled:opacity-60"
          >
            {loading ? "Submitting..." : "Submit Feedback"}
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Feedback;
