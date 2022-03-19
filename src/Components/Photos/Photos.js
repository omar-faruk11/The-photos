import React, { useEffect, useState } from 'react';
import Photo from '../Photo/Photo';
import './Photos.css'

const Photos = () => {
    const [photos, setphotos] = useState([])
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => setphotos(data))
    },[])
    return (
        <div>
        <h2>The photos</h2>
        <div className='photos'>
            {
                photos.map(photo=> <Photo photo={photo}></Photo>)
            }
        </div>
        </div>
    );
};

export default Photos;