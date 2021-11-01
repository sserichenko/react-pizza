import React from 'react';

function Categories({categories}) {

    const [isActiveItem, setIsActiveItem] = React.useState(null);

    function onSelectCategory (index){
        setIsActiveItem(index)
    }

    return (
        <div className="categories">
              <ul>
                  <li className={isActiveItem === null ? "active" : ''} onClick={() => setIsActiveItem(null)}>Все</li>
                  {
                    categories &&
                    categories.map((category, index) => 
                        <li 
                        className={isActiveItem === index ? "active" : ''}
                        key={`${category}_${index}`}
                        onClick={() => onSelectCategory(index)}
                        >{category}</li>
                    )
                  }
              </ul>
        </div>
    )
}

export default Categories;
