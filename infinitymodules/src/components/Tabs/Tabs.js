import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab.js';

class Tabs extends React.Component {

    constructor(props) {
        super(props);
        this.setState = {
            onSelect: func,
            currentSelectedTab: number
        }

    }
    render() {
        return (
            <Tab/>
        );
    };

}

export default Tab;
