import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
// import menuImg from "../../../assets/menu/menu-bg.png";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((d) => d.category === "dessert");
  const soup = menu.filter((d) => d.category === "soup");
  const pizza = menu.filter((d) => d.category === "pizza");
  const salad = menu.filter((d) => d.category === "salad");
  const offered = menu.filter((d) => d.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu" />
      <MenuCategory items={offered} />
      <MenuCategory items={dessert} title={`dessert`} coverImg={dessertImg} />
      <MenuCategory items={pizza} title={`pizza`} coverImg={pizzaImg} />
      <MenuCategory items={soup} title={`soup`} coverImg={soupImg} />
      <MenuCategory items={salad} title={`salad`} coverImg={saladImg} />
      {/* <MenuCategory items={offered} /> */}
    </div>
  );
};

export default Menu;
