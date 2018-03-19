import React from 'react';
import css from './Tab.css'

class Tab extends React.Component {
    render() {
        const {selectionKey, title, children} = this.props;
        return children;
    };
}

export default Tab;
