import React from 'react';
import PropTypes from 'prop-types';

class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSelectedTab: Tabs,
            selectionKey: number
        }
    }

    render() {
        return (
            <div>{this.state.selectionKey}</div>
        );
    };
}

export default Tab;
