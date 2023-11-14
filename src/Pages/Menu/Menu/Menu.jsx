import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
// import menuImg from "../../../assets/menu/menu-bg.png";
import menuImg from "../../../assets/menu/banner3.jpg"


const Menu = () => {
  return (
    
    <div>
      <Helmet>
        <title>Bistro Boss | menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
    </div>
  );
};

export default Menu;
