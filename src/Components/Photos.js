import React from 'react';

const Photos = (props) => {
    return(
        <li>
            <img src={props.url} alt={props.title} />
        </li>

    )
}

export default Photos;