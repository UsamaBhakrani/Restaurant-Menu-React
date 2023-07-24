import {menu} from "./data";
import Categories from "./Categories";

const App = () => {
  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="title-underline"></div>
        </div>
        <div className="btn-container">{menu.map(item=>{
          return <button type="button" className="btn">{}</button>
        })}</div>
        <div className="section-center"></div>
      </section>
    </main>
  );
};

export default App;
