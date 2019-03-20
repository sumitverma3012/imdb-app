import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import MovieDetails from './components/movies/MovieDetails';
import MoviesList from './components/movies/MoviesList';
import SearchForm from './components/movies/SearchMovies';
import MovieReview from './components/movies/MovieReview';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/signin" component={SignIn}></Route>
            <Route path="/signup" component={SignUp}></Route>
            <Route path="/movies" component={MoviesList}/>
            <Route path="/search" component={SearchForm}/>
            <Route path="/detail/:imdbID" component={MovieDetails}/>
            <Route path="/moviereview" component={MovieReview}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
