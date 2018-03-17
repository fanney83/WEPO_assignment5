import React from 'react';
import css from './Carousel.css';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    };
    nextImg () {
        if (this.state.counter < this.props.images.length - 1) {
            this.setState({
                counter: this.state.counter + 1
            });
        }
        else {
            this.setState({
                counter: 0
            });
        }
    };

    prevImg () {
        if (this.props.images.length === 0) {
            return;
        }
        if (this.state.counter === 0) {
            this.setState({
                counter: this.props.images.length - 1
            });
        }
        else {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    };
    render () {
        const {images, size = 'medium'} = this.props;
        return (
            <div className={css.carousel}>
                <button className={css.button} onClick={()=>this.prevImg()}> <span className={css.left} /> </button>
                <img className={css[`img-${size}`]} src={images[this.state.counter]} alt=""/>
                <button className={css.button} onClick={()=>this.nextImg()}><span className={css.right} /> </button>
            </div>
        );
    };
};


export default Carousel;
