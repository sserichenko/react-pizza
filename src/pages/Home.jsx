import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Categories } from '../components';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import SortPopup from '../components/SortPopup';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaLoadingBlock';

const categoriesNames = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
  { name: 'популярности', type: 'popular', order: 'desc'},
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'алфавиту', type: 'name', order: 'asc' },
];
const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const cartItems = useSelector(({cart}) => cart.items);
  console.log('cartItems', cartItems);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const onSelectCategory = React.useCallback(
    (index) => {
      dispatch(setCategory(index));
    },
    [],
  );

  
  const onSelectSortType = React.useCallback(
    (type) => {
      dispatch(setSortBy(type));
    },
    [],
  );

  const handleAddToCart = React.useCallback(
    (pizza) => {
      dispatch(addPizzaToCart(pizza));
    },
    [],
  );

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy, dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={categoriesNames} onClickCategory={onSelectCategory} activeCategory={category}/>
        <SortPopup activeSortType={sortBy.type} onClickSortType={onSelectSortType} sortItems={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((pizza, index) => (
              <PizzaBlock 
              cartCount={cartItems[pizza.id] ? cartItems[pizza.id].items.length : 0}
              {...pizza} 
              key={`${pizza.id}_${index}`} 
              isLoaded={isLoaded} 
              onAddToCart={(properties) => handleAddToCart(properties)}
              />
            ))
          : Array(12)
              .fill(Math.random() * 10)
              .map((_, index) => <PizzaLoadingBlock key={`${index}__${Math.random()}`} />)}
      </div>
    </div>
  );
};

export default Home;
