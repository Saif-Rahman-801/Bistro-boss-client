
import PropTypes from "prop-types"
const MenuItem = ({item}) => {
    const {name, image, price, recipe} = item
    return (
        <div className="flex space-x-5 items-center">
            <img style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="" className="w-[100px]"/>
            <div>
                <h3 className="uppercase">{name}------------- </h3>
                <p>{recipe} </p>
            </div>
            <p className="text-yellow-400">$ {price} </p>
        </div>
    );
};

MenuItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.any,
    name: PropTypes.any,
    price: PropTypes.any,
    recipe: PropTypes.any
  })
}

export default MenuItem;