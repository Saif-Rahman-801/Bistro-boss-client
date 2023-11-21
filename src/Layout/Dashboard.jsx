import {
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: To get is admin value from database
  const isAdmin = true;
  return (
    <div className="flex gap-10">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={`/dashboard/adminHome`}>
                  <FaHome /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={`/dashboard/addItems`}>
                  <FaUtensils /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={`/dashboard/manageItems`}>
                  <FaList /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to={`/dashboard/manageBookings`}>
                  <FaBook /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={`/dashboard/users`}>
                  <FaUsers /> All useres
                </NavLink>
              </li>
            </>
          ) : (
            <>
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
            </>
          )}

          <div className="divider"></div>
          {/* Shared navlinks */}
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
          <li>
            <NavLink to={`/`}>
              <FaEnvelope /> Contact
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
