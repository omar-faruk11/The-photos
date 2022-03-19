import React from 'react';
import './photo.css'

const Photo = (props) => {
    const {thumbnailUrl,title,} = props.photo
    return (
        <div className='photo'>
            <img src={thumbnailUrl} alt="" />
            <p>{title}</p>
        </div>
    );
};

export default Photo;