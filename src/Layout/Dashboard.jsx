import {
  FaCalendar,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex gap-10">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to={`/dashboard/cart`}>
              <FaShoppingCart /> My Cart({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={`/dashboard/userHome`}>
              <FaHome /> User Home
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
          <div className="divider"></div>
          <li>
            <NavLink to={`/`}>
              <FaHome /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/order/salad`}>
              <FaSearch /> Menu
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
