import React from 'react';
import PropTypes from 'prop-types';
import styles from './Row.css';

const Row = ({children}) => {

    return (

        <div>

            <h1 className={`${styles.test}`}>Bla!!!</h1>

        </div>

    );

};


Row.PropTypes = {
    children: PropTypes.node
}

export default Row;