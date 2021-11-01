import React from 'react';
import { Categories } from "../components";
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup';

const Home = ({pizzas}) => {
    const [categories, setCategories] = React.useState(["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые",]);

    return (
        <div className="container">
          <div className="content__top">
            <Categories categories={categories}/>
            <SortPopup items={['популярности', 'цене', 'алфавиту']}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map((pizza, index) =>
                <PizzaBlock 
                pizza={pizza} 
                key={pizza.id}
                />
              )           
            }
          </div>
        </div>
    );
};

export default Home;