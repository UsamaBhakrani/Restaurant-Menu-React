const Categories = ({ filteredItems,category }) => {
  return (
    <div className="btn-container">
      {category.map((item,index) => {
        return (
          <button
            onClick={() => filteredItems(item)}
            key={index}
            type="button"
            className="filter-btn"
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
