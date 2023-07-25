import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
import { useState } from "react";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [category, setCategory] = useState(allCategories);
  const [visibleMenu, setVisibleMenu] = useState(menu);

  const filteredItems = (cat) => {
    if (cat === "all") {
      setVisibleMenu(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === cat);
    setVisibleMenu(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="section-center">
          <Categories category={category} filteredItems={filteredItems} />
        </div>
        <div className="btn-container">
          <Menu menu={visibleMenu} />
        </div>
      </section>
    </main>
  );
};

export default App;
