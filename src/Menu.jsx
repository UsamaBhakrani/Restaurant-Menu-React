const Menu = ({ menu }) => {
  return (
    <div className="section-center">
      {menu.map((item) => {
        return (
          <article key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h5>{item.title}</h5>
                <span className="item-price">${item.price}</span>
              </header>
              <p className="item-text">{item.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
