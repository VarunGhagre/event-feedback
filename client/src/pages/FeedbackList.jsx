import { useEffect, useState } from "react";

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchFeedback = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:5000/api/feedback"
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to fetch feedback"
        );
      }

      setFeedback(data.feedback);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Community Feedback
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Event Feedback
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            See what attendees are saying about our events.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {loading && (
          <div className="flex justify-center py-16">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
          </div>
        )}

        {error && (
          <div className="mx-auto max-w-xl rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-center text-red-700">
            {error}
          </div>
        )}

        {!loading && !error && feedback.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="text-5xl">💬</div>

            <h2 className="mt-4 text-xl font-bold text-slate-900">
              No feedback yet
            </h2>

            <p className="mt-2 text-slate-500">
              Be the first person to share your experience.
            </p>
          </div>
        )}

        {!loading && !error && feedback.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {feedback.map((item) => (
              <article
                key={item._id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-600">
                    {item.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>
                    <h2 className="font-bold text-slate-900">
                      {item.name}
                    </h2>

                    <p className="text-sm text-slate-500">
                      {item.email}
                    </p>
                  </div>
                </div>

                {/* Event */}
                <div className="mt-5">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    {item.event}
                  </span>
                </div>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-lg tracking-wide text-yellow-500">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)}
                  </span>

                  <span className="text-sm font-medium text-slate-500">
                    {item.rating}/5
                  </span>
                </div>

                {/* Message */}
                <p className="mt-4 leading-7 text-slate-600">
                  "{item.message}"
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default FeedbackList;