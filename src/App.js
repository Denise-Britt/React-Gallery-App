import React, {Component} from 'react';
import axios from 'axios';import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

///// App Components /////
import apiKey from './Components/config';

import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';
/////////

import './App.css';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    let path = window.location.pathname 
    if (path === "/") {
      this.performSearch('Spongebob');
    } else if (path.startsWith("/search")) {        
      this.performSearch(path.slice(8))       
    } 
    this.setState({ 
      loading: false
    })    
    this.performSearch();

    
  }
  

  performSearch = (query) => {

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      });
  })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    })
  }
    
  render () {
    console.log(this.state.photos);
    return (
      <BrowserRouter>
        <div className="container">
          
          <SearchForm onSearch={this.performSearch}/>

          <Nav />
          {
            (this.state.loading)
            ? <p> Loading...</p>
            : <PhotoContainer data={this.state.photos} />
          }

        </div>      
      </BrowserRouter>

  )
}
  
}
