import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";
import { useState } from "react";

const categories = ["all", "breakfast", "lunch", "shakes"];

const App = () => {
  const [category, setCategory] = useState("");
  const [visibleMenu, setVisibleMenu] = useState(menu);
  console.log(category);
  console.log(visibleMenu);

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
        <div className="btn-container">
          <Menu menu={menu} />
        </div>
      </section>
    </main>
  );
};

export default App;
