import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Tech Conference 2026",
    date: "25 August 2026",
    location: "New Delhi",
    category: "Technology",
    description:
      "A technology conference focused on modern software development, innovation, and emerging technologies.",
  },
  {
    id: 2,
    title: "AI & Machine Learning Workshop",
    date: "30 August 2026",
    location: "Delhi",
    category: "Artificial Intelligence",
    description:
      "An interactive workshop covering artificial intelligence, machine learning, and practical industry use cases.",
  },
  {
    id: 3,
    title: "Web Development Meetup",
    date: "5 September 2026",
    location: "Gurugram",
    category: "Web Development",
    description:
      "A developer meetup focused on modern frontend, backend, and full-stack web development technologies.",
  },
];

const Events = () => {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Discover & Share
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Upcoming Events
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Explore upcoming events, discover new experiences, and share your
            valuable feedback.
          </p>
        </div>
      </section>

      {/* Events */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <article
              key={event.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Event Image Placeholder */}
              <div className="flex h-44 items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700">
                <div className="text-center text-white">
                  <div className="text-5xl">📅</div>
                  <p className="mt-2 text-sm font-medium opacity-90">
                    {event.category}
                  </p>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-slate-900">
                  {event.title}
                </h2>

                <div className="mt-4 space-y-2 text-sm text-slate-600">
                  <p className="flex items-center gap-2">
                    <span>📅</span>
                    {event.date}
                  </p>

                  <p className="flex items-center gap-2">
                    <span>📍</span>
                    {event.location}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {event.description}
                </p>

                <Link
                  to="/feedback"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Give Feedback
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Events;