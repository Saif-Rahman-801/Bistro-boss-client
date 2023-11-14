import { useEffect, useState } from "react";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setMenu(data.filter((d) => d.category === "popular")));
  }, []);

  return (
    <section className="my-5">
      <header>
        <h2 className="text-center text-3xl fotn-bold">Form our menu</h2>
      </header>
      <div className="grid md:grid-cols-2 gap-4 my-10">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
