import React from 'react';
import PropTypes from 'prop-types';
import styles from './CartoonNetworkSpinner.css';

import Image from '../../images/CartoonNetworkSpinner/stewie.jpg';

console.log(styles);
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
    getRandomImageId() {
        const min = 0;
        const max = 3;
        return Math.floor(Math.random() * (max - min)) + min;
    }

    componentDidMount () {
        setInterval(this.setImage.bind(this) ,this.props.interval * 1000)
    }

    setImage() {
        this.setState({ currentImage: this.getRandomImageId() });
    }

    render () {
        const images = [
            "../../images/CartoonNetworkSpinner/stewie.jpg",
            "../../images/CartoonNetworkSpinner/stewieguns.png"
        ];
        return (
            <div className={styles.clock}>
                <h2>Cartoon Network Spinner</h2>
                <img src={images[this.state.currentImage]} alt=""/>
                <img src={Image} className={` ${styles.image}`} alt=""/>
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

/*componentDidMount: function() {
   var intervalId = setInterval(this.timer, 1000);
   // store intervalId in the state so it can be accessed later:
   this.setState({intervalId: intervalId});
},

componentWillUnmount: function() {
   // use intervalId from the state to clear the interval
   clearInterval(this.state.intervalId);
},

timer: function() {
   // setState method is used to update the state
   this.setState({ currentCount: this.state.currentCount -1 });
},

render: function() {
    // You do not need to decrease the value here
    return (
      <section>
       {this.state.currentCount}
      </section>
    );
}*/

/*timer: function() {
   var newCount = this.state.currentCount - 1;
   if(newCount >= 0) {
       this.setState({ currentCount: newCount });
   } else {
       clearInterval(this.state.intervalId);
   }
},*/
