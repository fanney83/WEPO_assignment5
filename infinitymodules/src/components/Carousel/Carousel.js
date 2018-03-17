import React from 'react';
import css from './Carousel.css';

const Carousel = ({images, size = 'medium'}) => {
    return (
        <div className={css.carousel}>
            {images.map((img) => <img className={css[`img-${size}`]} src={img} />)}
        </div>
    );
};


export default Carousel;
