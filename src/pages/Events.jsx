import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import { getAllEvents } from "../services/feedbackService";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Technology",
    "Workshop",
    "Seminar",
    "Hackathon",
    "Conference",
  ];

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const response = await getAllEvents();

      if (Array.isArray(response.data)) {
        setEvents(response.data);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error("Failed to load events:", error);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredEvents = useMemo(() => {
    return events.filter((event) => {
      const title = (event.title || "").toLowerCase();
      const location = (event.location || "").toLowerCase();
      const eventCategory = event.category || "";

      const searchMatch =
        title.includes(search.toLowerCase()) ||
        location.includes(search.toLowerCase());

      const categoryMatch =
        category === "All" ||
        eventCategory.toLowerCase() === category.toLowerCase();

      return searchMatch && categoryMatch;
    });
  }, [events, search, category]);

  return (
    <div className="min-h-screen bg-[#050816] text-white relative overflow-hidden">
      {/* Background Blur */}

      <div className="absolute top-20 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h1 className="text-5xl lg:text-6xl font-bold">
            Upcoming
            <span className="text-cyan-400"> Events</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">
            Explore upcoming events, attend them, and share your valuable
            feedback to help organizers improve future experiences.
          </p>

          <p className="mt-5 text-cyan-400 font-semibold text-lg">
            {filteredEvents.length} Events Available
          </p>
        </motion.div>

        {/* Search */}

        <div className="mt-14 flex flex-col lg:flex-row gap-5 justify-between">
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full lg:w-96
              px-5
              py-4
              rounded-xl
              bg-white/10
              border
              border-white/10
              backdrop-blur-xl
              outline-none
              focus:border-cyan-400
              transition
            "
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
              px-5
              py-4
              rounded-xl
              bg-slate-900
              border
              border-white/10
              outline-none
            "
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>

        {/* Loading */}

        {loading && (
          <div className="flex justify-center mt-20">
            <div className="w-16 h-16 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
          </div>
        )}

        {/* Empty State */}

        {!loading && filteredEvents.length === 0 && (
          <div className="text-center mt-24">
            <h2 className="text-3xl font-bold">No Matching Events</h2>

            <p className="text-gray-400 mt-4">
              Try another search keyword or category.
            </p>
          </div>
        )}

        {/* ===================== EVENT CARDS ===================== */}

        {!loading && filteredEvents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                }}
                className="
        overflow-hidden
        rounded-3xl
        bg-white/10
        backdrop-blur-xl
        border
        border-white/10
        hover:border-cyan-400/40
        transition-all
        duration-500
        shadow-xl
        hover:shadow-cyan-500/20
      "
              >
                {/* Image */}

                <div className="relative overflow-hidden">
                  <img
                    src={
                      event.imageUrl ||
                      "https://placehold.co/600x400?text=Event"
                    }
                    alt={event.title}
                    className="
            w-full
            h-60
            object-cover
            transition
            duration-700
            hover:scale-110
          "
                  />

                  {/* Date Badge */}

                  <div
                    className="
            absolute
            top-4
            left-4
            px-4
            py-2
            rounded-xl
            bg-black/50
            backdrop-blur-md
            text-sm
            font-semibold
            border
            border-white/20
          "
                  >
                    {event.eventDate}
                  </div>

                  {/* Featured */}

                  <div
                    className="
            absolute
            top-4
            right-4
            px-3
            py-2
            rounded-xl
            bg-yellow-400
            text-black
            font-bold
            text-xs
          "
                  >
                    Featured
                  </div>
                </div>

                {/* Card Body */}

                <div className="p-7">
                  {/* Category */}

                  <span
                    className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-cyan-500/20
            text-cyan-300
            text-sm
          "
                  >
                    {event.category}
                  </span>

                  {/* Title */}

                  <h2 className="text-2xl font-bold mt-5">{event.title}</h2>

                  {/* Description */}

                  <p className="text-gray-400 mt-4 leading-7 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Location */}

                  <div className="flex items-center gap-3 mt-6">
                    <FaMapMarkerAlt className="text-pink-400" />

                    <span>{event.location}</span>
                  </div>

                  {/* Button */}

                  <Link
                    to="/feedback"
                    state={{
                      event: event,
                    }}
                    className="
            mt-8
            w-full
            flex
            items-center
            justify-center
            gap-3
            py-4
            rounded-xl
            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-purple-600
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            shadow-lg
            hover:shadow-cyan-500/40
          "
                  >
                    Give Feedback
                    <FaArrowRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
