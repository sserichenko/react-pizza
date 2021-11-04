import React from 'react';
import PropTypes, { checkPropTypes, number, string } from 'prop-types';
import { func } from 'prop-types';

const Categories = React.memo(function Categories({ categories, onClickCategory, activeCategory }) {

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {categories &&
          categories.map((category, index) => (
            <li
              className={activeCategory === index ? 'active' : ''}
              key={`${category}_${index}`}
              onClick={() => onClickCategory(index, category)}>
              {category}
            </li>
          ))}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  categories: PropTypes.arrayOf(string).isRequired,
  // activeCategory: PropTypes.oneOf([checkPropTypes(null), checkPropTypes(number)]),
  onClickItem: func,
};

Categories.defaultProps = {
  categories: [],
  activeCategory: null,
};

export default Categories;
