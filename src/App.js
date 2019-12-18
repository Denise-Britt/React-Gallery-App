import React, {Component} from 'react';
import axios from 'axios';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

///// App Components /////
import apiKey from './Components/config';

import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';
/////////

import './index.css';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ 
      loading: false
    })    
    this.performSearch();

    
  }
  

  performSearch = (query = "Jack Skellington") => {

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
    
    return (
      <BrowserRouter>
        <div className="container">
          
          <Nav performSearch={this.performSearch}/>
          <SearchForm performSearch={this.performSearch} data={this.state.imgs} {...this.props}/>

          <Route path="/Jack+Skellington" render={(props) => <PhotoContainer onSearch={this.performSearch} data={this.state.imgs} {...props}/> }/>

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
