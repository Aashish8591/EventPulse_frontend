import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

// -----------------------------
// Event APIs
// -----------------------------

export const getAllEvents = async () => {
    return await axios.get(`${API_BASE_URL}/events`);
};

export const getEventById = async (id) => {
    return await axios.get(`${API_BASE_URL}/events/${id}`);
};

export const createEvent = async (event) => {
    return await axios.post(`${API_BASE_URL}/events`, event);
};

export const updateEvent = async (id, event) => {
    return await axios.put(`${API_BASE_URL}/events/${id}`, event);
};

export const deleteEvent = async (id) => {
    return await axios.delete(`${API_BASE_URL}/events/${id}`);
};

// -----------------------------
// Feedback APIs
// -----------------------------

export const getAllFeedback = async () => {
    return await axios.get(`${API_BASE_URL}/feedback`);
};

export const getFeedbackById = async (id) => {
    return await axios.get(`${API_BASE_URL}/feedback/${id}`);
};

export const saveFeedback = async (feedback) => {
    return await axios.post(`${API_BASE_URL}/feedback`, feedback);
};

export const updateFeedback = async (id, feedback) => {
    return await axios.put(`${API_BASE_URL}/feedback/${id}`, feedback);
};

export const deleteFeedback = async (id) => {
    return await axios.delete(`${API_BASE_URL}/feedback/${id}`);
};