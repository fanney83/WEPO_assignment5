import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimePicker.css';

class TimePicker extends React.Component {
        
    handleClick(e) {
        console.log(e.clientX);
        console.log('this is:', this);
      }

    render () {
        var TimeFormat;

        if(this.props.format === 24) {
            TimeFormat = 12;
        } 
        else {
            TimeFormat = 0;
        }
        
        return (        
            <div className={styles.clock}>   
                <div className={`${styles.num} ${styles.num1}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 1}</button></div>
                <div className={`${styles.num} ${styles.num2}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 2}</button></div>
                <div className={`${styles.num} ${styles.num3}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 3}</button></div>
                <div className={`${styles.num} ${styles.num4}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 4}</button></div>
                <div className={`${styles.num} ${styles.num5}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 5}</button></div>
                <div className={`${styles.num} ${styles.num6}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 6}</button></div>
                <div className={`${styles.num} ${styles.num7}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 7}</button></div>
                <div className={`${styles.num} ${styles.num8}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 8}</button></div>
                <div className={`${styles.num} ${styles.num9}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 9}</button></div>
                <div className={`${styles.num} ${styles.num10}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 10}</button></div>
                <div className={`${styles.num} ${styles.num11}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 11}</button></div>
                <div className={`${styles.num} ${styles.num12}`}><button onClick={(e) => this.handleClick(e)}>{TimeFormat + 12}</button></div>
                <div className={`${styles.hand}`}></div>
            </div>
        );
    }
    
    
};



TimePicker.propTypes = {
    onTimePick: PropTypes.func.isRequired,
    format: PropTypes.oneOf([24, 12]).isRequired
}

export default TimePicker;