import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories } from "../components";
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup';
import { setCategory } from "../redux/actions/filters";

const categoriesNames = ["Мясные", "Вегетарианские", "Гриль", "Острые", "Закрытые"];
const sortItems = [
  {name: 'популярности', type: 'popular'}, 
  {name: 'цене', type: 'price'}, 
  {name: 'алфавиту', type: 'alphabet'}]
const Home = () => {
    
    const dispatch = useDispatch();
    const items  = useSelector(({pizzas}) => pizzas.items);
    
    const onSelectCategory = React.useCallback((index) => {
      dispatch(setCategory(index))
    }, []);


    return (
        <div className="container">
          <div className="content__top">
            <Categories 
            categories={categoriesNames}
            onClickItem={onSelectCategory}
            />
            <SortPopup sortItems={sortItems}/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              items &&
              items.map((pizza, index) =>
                <PizzaBlock 
                {...pizza} 
                key={pizza.id}
                />
              )           
            }
          </div>
        </div>
    );
};

export default Home;