import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './js/components/LandingPage/Home';
import Catalog from './js/components/Catalog/Catalog';
import Login from './js/components/Login/Login';
import Cart from './js/components/Cart/Cart';
import Checkout from './js/components/Checkout/Checkout';
import Account from './js/components/Account/Account';
import Measures from './js/components/Pages/Measures';
import NotFound from './js/components/NotFound/NotFound';
import Header from './js/components/Header/Header';
import Footer from './js/components/Footer/Footer';
import Side from './js/components/Side/Side';
import './styles/style.scss';
import ProductDetail from './js/components/Product/ProductDetail';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="page">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catalog" component={Catalog} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/my-account" component={Account} />
            <Route path="/product/:id" component={ProductDetail} />
            <Route path="/contact" component={Home} />
            <Route path="/measures" component={Measures} />
            <Route path="/login" component={Login} />
            <Route component={NotFound} />
          </Switch>
          <Side />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
