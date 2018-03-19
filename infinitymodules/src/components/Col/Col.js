import React from 'react';
import styles from './Col.css';

const Col = ({ size }) => {

    return (
        <div className={`${styles.col} ${styles[`col-${size}`]}`} >
            <div className={`${styles.content}`}>
                content
            </div>
        </div>
    );
};

// piazza
Col.propTypes = {
    size: (props, propName) => {
        const prop = props[propName];
        if (prop >= 1 && prop <= 12) { return; }
        return new Error('Column size should be between 1 and 12');
    }
};

export default Col;
