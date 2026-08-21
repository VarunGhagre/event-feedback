import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
        >
          EventFeedback
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/events"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Events
          </Link>

          <Link
            to="/feedback"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            Feedback
          </Link>

          <Link
            to="/feedback-list"
            className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
          >
            View Feedback
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;