import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.css';

const Row = ({children}) => {

    return (

        <div>
            <h1 className={`${styles.test}`}>Row</h1>
        </div>
    );
};


Row.propTypes = {
    children: PropTypes.node
}

export default Row;