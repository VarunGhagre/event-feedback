import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-[calc(100vh-73px)] bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <section className="mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center justify-center px-6 py-20 text-center">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Event Feedback Platform
          </span>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
            Your Feedback
            <span className="block text-blue-600">
              Makes Events Better
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Share your experience, rate events, and help organizers
            create better experiences for everyone.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/events"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700"
            >
              Explore Events
            </Link>

            <Link
              to="/feedback"
              className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              Give Feedback
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;