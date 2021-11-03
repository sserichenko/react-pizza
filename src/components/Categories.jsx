import React from 'react';

const Categories = React.memo(function Categories({categories, onClickItem}) {

    const [isActiveItem, setIsActiveItem] = React.useState(null);

    function onSelectCategory (index){
        setIsActiveItem(index);
        onClickItem(index);
    }

    return (
        <div className="categories">
              <ul>
                  <li className={isActiveItem === null ? "active" : ''} onClick={() => onSelectCategory(null)}>Все</li>
                  {
                    categories &&
                    categories.map((category, index) => 
                        <li 
                        className={isActiveItem === index ? "active" : ''}
                        key={`${category}_${index}`}
                        onClick={() => onSelectCategory(index, category)}
                        >{category}</li>
                    )
                  }
              </ul>
        </div>
    )
})

export default Categories;
