import React, {Component} from 'react';
import {Route} from "react-router-dom";
import { connect } from 'react-redux';
import { Header } from "./components";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import "./scss/app.scss";
import axios from 'axios';
import { setPizzas as setPizzasAction } from './redux/actions/pizzas';



  // React.useEffect(() => {

  //   axios.get(`http://localhost:3001/db.json`)
  //   .then(res => {
  //     const response = res.data.pizzas;
  //     setPizzas(pizzas => [...pizzas, ...response]);
  //   })
  // }, [])



class App extends Component {
  componentDidMount(){
    axios.get(`http://localhost:3001/db.json`)
    .then(res => {
      const response = res.data.pizzas;
      this.props.setPizzas(response)
    })
  }
  render() {
    console.log('this.props', this.props)
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home pizzas={this.props.items}/>} />
          <Route exact path="/cart" component={Cart} />
        </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzasAction(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

