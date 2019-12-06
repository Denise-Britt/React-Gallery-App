import React from 'react';
import ReactDOM from 'react-dom';
import { 
    BrowserRouter,
    Switch,
    Route,
  } from 'react-router-dom';
import apiKey from './config';
import NotFound from './NotFound';

const Photos = (props) => {
    const url = `https://${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`;
    return(
        <li>
            <img src={url} alt={props.title} />
        </li>

    )
}

export default Photos;