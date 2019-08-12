import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import store from './store';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Switch>
            <Route  path="/edit/:id" component={PostForm} />
            <Route exact path="/" component={PostForm} />
          </Switch>
          <hr />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
