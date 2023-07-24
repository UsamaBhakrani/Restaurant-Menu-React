import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
import { useState } from "react";

const categories = ["all", "breakfast", "lunch", "shakes"];

const App = () => {
  const [category, setCategory] = useState("all");
  const [visibleMenu, setVisibleMenu] = useState(menu);
  console.log(category);

  const filteredItems = visibleMenu.filter(
    (menu) => menu.category === category
  );
  console.log(filteredItems);

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="title-underline"></div>
        </div>
        <div className="section-center">
          <Categories
            categories={categories}
            onSelect={(item) => setCategory(item)}
          />
        </div>
        <div className="btn-container">{<Menu menu={filteredItems} />}</div>
      </section>
    </main>
  );
};

export default App;
