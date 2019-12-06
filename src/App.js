import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Switch,
  Route, 
  BrowserRouter as Router,
  Link
} from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

///// App Components /////
import apiKey from './Components/config';

import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';
/////////


//const queryString = require('query-string');
//let path = `${match.url}/relative-path`;

const resultsPerPage = 24;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }
  
  
  updatePhoto = photo => {
    const newPhoto = photo;
    this.setState(state => {
      if (state.photo === newPhoto) {
        return null;
      } else {
        return { photo };
      }
    });
  }

  performSearch = (query = 'cats') => {

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
    <div className="container">
      
      <SearchForm onSearch={this.performSearch}/>

      <Nav />
      {
        (this.state.loading)
        ? <p> Loading...</p>
        : <PhotoContainer data={this.state.photos} />
      }
    </div>
  )
}
  
}
