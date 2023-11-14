import PropTypes from "prop-types"
const FoodCard = ({ item }) => {
  const {name, image, recipe} = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure className="relative">
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-slate-800 p-3 text-white absolute right-0 mr-4 mt-4 rounded-md font-semibold">${item.price} </p>
      <div className="card-body">
        <h2 className="card-title">{name} </h2>
        <p>{recipe} </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary rounded-md">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

FoodCard.propTypes = {
  item: PropTypes.any,
  items: PropTypes.any
}

export default FoodCard;
