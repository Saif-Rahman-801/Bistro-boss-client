import PropTypes from "prop-types"
import FoodCard from "../../Shared/FoodCard/FoodCard";

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-3 space-y-5">
            {items.map((item) => (
              <FoodCard key={item._id} item={item} />
            ))}
          </div>
    );
};

OrderTab.propTypes = {
  items: PropTypes.shape({
    map: PropTypes.func
  })
}

export default OrderTab;