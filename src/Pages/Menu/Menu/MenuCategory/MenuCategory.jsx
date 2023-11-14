import PropTypes from "prop-types";
import MenuItem from "../../../Shared/MenuItem";
import Cover from "../../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-4 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
      <button className="btn btn-primary rounded-md">
        Order now
      </button>
      </Link>
    </div>
  );
};

MenuCategory.propTypes = {
  coverImg: PropTypes.any,
  items: PropTypes.shape({
    map: PropTypes.func,
  }),
  title: PropTypes.any,
};

export default MenuCategory;
