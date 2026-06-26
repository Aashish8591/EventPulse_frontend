import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

import { getAllFeedback } from "../services/feedbackService";

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {
    loadFeedbacks();
  }, []);

  const loadFeedbacks = async () => {
    try {
      const response = await getAllFeedback();

      if (Array.isArray(response.data)) {
        setFeedbacks(response.data);
      } else {
        setFeedbacks([]);
      }
    } catch (error) {
      console.error(error);

      setFeedbacks([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredFeedback = useMemo(() => {
    return feedbacks.filter((feedback) => {
      const name = (feedback.name || "").toLowerCase();

      const email = (feedback.email || "").toLowerCase();

      const event = (feedback.eventName || "").toLowerCase();

      return (
        name.includes(search.toLowerCase()) ||
        email.includes(search.toLowerCase()) ||
        event.includes(search.toLowerCase())
      );
    });
  }, [feedbacks, search]);

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      {/* Background */}

      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold">
            User
            <span className="text-cyan-400"> Feedback</span>
          </h1>

          <p className="mt-5 text-gray-400">
            View all submitted feedback from attendees.
          </p>

          <p className="mt-4 text-cyan-400 font-semibold">
            {filteredFeedback.length} Feedback Available
          </p>
        </motion.div>

        {/* Search */}

        <div className="mt-14">
          <input
            type="text"
            placeholder="Search by Name, Email or Event..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-96 px-5 py-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-xl outline-none focus:border-cyan-400"
          />
        </div>

        {/* Loading */}

        {loading && (
          <div className="flex justify-center mt-20">
            <div className="w-16 h-16 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin"></div>
          </div>
        )}

        {/* Empty */}

        {!loading && filteredFeedback.length === 0 && (
          <div className="text-center mt-24">
            <h2 className="text-3xl font-bold">No Feedback Found</h2>

            <p className="mt-4 text-gray-400">
              No feedback matches your search.
            </p>
          </div>
        )}

        {/* ================= FEEDBACK CARDS ================= */}

        {!loading && filteredFeedback.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {filteredFeedback.map((feedback, index) => (
              <motion.div
                key={feedback.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/10
                    backdrop-blur-xl
                    p-7
                    shadow-xl
                    hover:border-cyan-400/40
                    hover:shadow-cyan-500/20
                    transition-all
                    duration-500
                    "
              >
                {/* User */}

                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold">{feedback.name}</h2>

                    <p className="text-sm text-gray-400 mt-1">
                      {feedback.email}
                    </p>
                  </div>

                  <span className="px-3 py-2 rounded-xl bg-cyan-500/20 text-cyan-300 text-sm">
                    #{feedback.id}
                  </span>
                </div>

                {/* Event */}

                <div className="mt-6">
                  <p className="text-gray-400 text-sm">Event</p>

                  <h3 className="font-semibold text-lg mt-1">
                    {feedback.eventName}
                  </h3>
                </div>

                {/* Rating */}

                <div className="mt-6">
                  <p className="text-gray-400 text-sm mb-2">Rating</p>

                  <div className="flex gap-1">
                    {[...Array(Number(feedback.rating || 0))].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Comment */}

                <div className="mt-6">
                  <p className="text-gray-400 text-sm mb-2">Feedback</p>

                  <div className="rounded-2xl bg-slate-900/70 border border-white/10 p-4">
                    <p className="leading-7 text-gray-300">
                      {feedback.comment}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewFeedback;
