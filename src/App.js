import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import AddMeme from './components/AddMeme/AddMeme';
import PrivateRoute from './components/PrivateRoute';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Login}/>
        <PrivateRoute path="/home" component={Home}/>
        <PrivateRoute path="/profile" component={Profile}/>
        <PrivateRoute path="/add_meme" component={AddMeme}/>
      </Switch>
    </div>
  );
}

export default App;
