import {
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to={`/dashboard/cart`}>
              <FaShoppingCart /> My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/userHome`}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/reservation`}>
              <FaCalendar /> Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/review`}>
              <FaStar /> Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/bookings`}>
              <FaList /> My Bookings
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
