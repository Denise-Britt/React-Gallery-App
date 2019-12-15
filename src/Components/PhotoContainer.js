import React, {Component} from 'react';
import Photos from './Photos';
import NotFound from './NotFound';

class PhotoContainer extends Component {

  render() {
    let results = this.props.data;
    let photos;

    if (results.length > 0) {

      photos = results.map(photo =>
          <Photos 
            {...photo}
            key={photo.id}
            id={photo.id}
            farm={photo.farm}
            url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
            secret={photo.secret}
            server={photo.server}
            alt={photo.title}
          />   
      );


    } else {
      photos = <NotFound />

    }
  
    return(
      <div className="photo-container">
        <h2>Results</h2>
        <ul>
          {photos}
        </ul>
      </div>

    );
  };  
};
  
 
export default PhotoContainer;