const Categories = ({ categories, onSelect }) => {
  return (
    <div className="btn-container">
      {categories.map((item) => {
        return (
          <button
            onClick={() => onSelect(item)}
            key={item}
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
