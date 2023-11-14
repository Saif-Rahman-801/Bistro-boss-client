import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();
  if (loading) {
    return <h2>Loading..... </h2>;
  }
  const popular = menu.filter((d) => d.category === "popular");

  return (
    <section className="my-5">
      <header>
        <h2 className="text-center text-3xl fotn-bold">Form our menu</h2>
      </header>
      <div className="grid md:grid-cols-2 gap-4 my-10">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
