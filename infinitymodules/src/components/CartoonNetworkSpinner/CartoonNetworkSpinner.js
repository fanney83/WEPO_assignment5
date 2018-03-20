import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartoonNetworkSpinner.css';


/*https://stackoverflow.com/questions/44607396/importing-multiple-files-in-react*/
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item);
    });
    return images;
}

const images = importAll(require.context('../../images/CartoonNetworkSpinner/', false, /\.png$/));

class CartoonNetworkSpinner extends React.Component {

    /*skoða
        https://stackoverflow.com/questions/38387822/how-to-rotate-img-source-at-interval-in-a-react-component
    */

   constructor(props) {
        super(props);
        this.state = {
            currentImage: 0
        };
    }

    componentDidMount() {
        setInterval(this.setWaitTime.bind(this), this.props.interval * 1000);
    }

    setWaitTime() {
        this.setState({currentImage: this.getRandomImageId()});
        //setInterval(this.setRandomImage.bind(this), this.props.interval * 1000);
    }

    getRandomImageId() {
        return Math.floor(1 + Math.random() * 8);
    }

    render () {
        return (
            <div className={styles.CartoonNetworkSpinner}>
                <h2>Cartoon Network Spinner</h2>
                    <img src={images[this.state.currentImage + '.png']} className={`${styles.image}`}
                        style={{'WebkitAnimationDuration': this.props.interval+'s'}}
                     alt="cartoonImage"/>
            </div>
        );
    }
};



CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number.isRequired
}

CartoonNetworkSpinner.defaultProps = {
    interval: 3
}

export default CartoonNetworkSpinner;
