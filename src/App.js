import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInPage from './pages/signin/signin.component'
import { auth } from './firebase/firebase.utils'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unsubscribefromAuth = null;

  componentDidMount() {
    this.unsubscribefromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribefromAuth();
  }
  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInPage}/>
        </Switch>
      </div>
    );
  }

}

export default App;
