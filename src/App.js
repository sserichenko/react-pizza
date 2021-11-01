import React from 'react';
import {Route} from "react-router-dom";
import { Header } from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./scss/app.scss";

function App() {

  const [pizzas, setPizzas] = React.useState([]);


  React.useEffect(() => {
    fetch("http://localhost:3001/db.json")
    .then(response => response.json())
    .then(json => setPizzas(json.pizzas))
  }, [])


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" render={() => <Home pizzas={pizzas}/>} />
        <Route exact path="/cart" component={Cart} />
      </div>
    </div>
  );
}

export default App;
