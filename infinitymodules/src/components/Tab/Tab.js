import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

class Tab extends React.Component {
    render () {
        return <div>{this.props.children}</div>
    }
}
Tab.propTypes = {
    selectionkey: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
};

export default Tab;
