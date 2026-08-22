import { useState } from "react";

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    rating: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/feedback",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit feedback");
      }

      setSuccess("Feedback submitted successfully!");

      setFormData({
        name: "",
        email: "",
        event: "",
        rating: "",
        message: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Share Your Experience
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            Event Feedback
          </h1>

          <p className="mt-3 text-slate-600">
            Your feedback helps us improve future events.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Event */}
            <div>
              <label
                htmlFor="event"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Select Event
              </label>

              <select
                id="event"
                name="event"
                value={formData.event}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Choose an event</option>
                <option value="Tech Conference 2026">
                  Tech Conference 2026
                </option>
                <option value="AI & Machine Learning Workshop">
                  AI & Machine Learning Workshop
                </option>
                <option value="Web Development Meetup">
                  Web Development Meetup
                </option>
              </select>
            </div>

            {/* Rating */}
            <div>
              <label
                htmlFor="rating"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Rating
              </label>

              <select
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              >
                <option value="">Select your rating</option>
                <option value="5">★★★★★ — Excellent</option>
                <option value="4">★★★★☆ — Very Good</option>
                <option value="3">★★★☆☆ — Good</option>
                <option value="2">★★☆☆☆ — Average</option>
                <option value="1">★☆☆☆☆ — Poor</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Your Feedback
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your experience..."
                rows="6"
                required
                className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Success */}
            {success && (
              <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
                ✓ {success}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Feedback;