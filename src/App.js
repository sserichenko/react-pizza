import React from 'react';
import {Route} from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./scss/app.scss";


const App = () => {
  return (
    <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
        </div>
    </div>
  );
};

export default App;


// Если не используем хуки


// const mapStateToProps = (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

