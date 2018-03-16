import React from 'react';
import css from './Carousel.css';

const Carousel = ({images, size}) => {
    const img = images.map((img) =>
    <li>{images}</li>
);
    return (
        <div style={{ backgroundImage: `url(${img})` }}>className={`${css.img}`}</div>
    );
};


export default Carousel;
