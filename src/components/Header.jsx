import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Rbs.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <div className="bg-white border-b shadow-sm">
      <header className="flex justify-between items-center px-2 max-w-6xl m-auto border-1 sticky top-0 z-50">
        <div>
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Buy baby sale"
            className="logo cursor-pointer"
          />
        </div>
        <div>
          <ul className="flex justify-between items-center space-x-10">
            <li
              onClick={() => navigate("/")}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
              }`}
            >
              Home
            </li>
            <li
              onClick={() => navigate("/offers")}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/offers") && "text-black border-b-red-500"
              }`}
            >
              Offers
            </li>
            <li
              onClick={() => navigate("/sign-in")}
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/sign-in") && "text-black border-b-red-500"
              }`}
            >
              Sign In
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
