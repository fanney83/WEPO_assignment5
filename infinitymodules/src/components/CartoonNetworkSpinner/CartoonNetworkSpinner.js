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
            <div className={styles.spinnerContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.upperRow}>
                        <span className={styles.letterWhite}>C</span>
                        <span className={styles.letterBlack}>A</span>
                        <span className={styles.letterWhite}>R</span>
                        <span className={styles.letterBlack}>T</span>
                        <span className={styles.letterWhite}>O</span>
                        <span className={styles.letterBlack}>O</span>
                        <span className={styles.letterWhite}>N</span>
                    </div>
                    <div className={styles.lowerRow}>
                        <span className={styles.letterBlack}>N</span>
                        <span className={styles.letterWhite}>E</span>
                        <span className={styles.letterBlack}>T</span>
                        <span className={styles.letterWhite}>W</span>
                        <span className={styles.letterBlack}>O</span>
                        <span className={styles.letterWhite}>R</span>
                        <span className={styles.letterBlack}>K</span>
                    </div>
                    <span className={styles.letter}>Spinner</span>
                </div>
                <div className={styles.CartoonNetworkSpinner}>
                        <img src={images[this.state.currentImage + '.png']} className={`${styles.image}`}
                            style={{'WebkitAnimationDuration': this.props.interval+'s'}}
                         alt="cartoonImage"/>
                </div>
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
