import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  //   console.log(cart);

  const totalPrice = cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  return (
    <div>
      <div className="flex justify-evenly items-center my-5">
        <h2 className="text-4xl font-semibold">Items: {cart.length}</h2>
        <h2 className="text-4xl font-semibold">Total Price: {totalPrice}$</h2>
        <button className="btn btn-primary">Pay</button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h3 className="font-medium">{item.name} </h3>
                </td>
                <td>
                  <h2 className="font-medium">${item.price}</h2>
                </td>
                <th>
                  <button className="btn btn-ghost btn-lg text-red-600">
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
