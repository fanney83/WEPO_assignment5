import React from 'react';
import propTypes from 'prop-types';

class Tab extends React.Component {
    render() {
        const {selectionKey, title, children} = this.props;
        return children;
    };
}
Tab.propTypes = {
    selectionKey: propTypes.number.isRequired,
    title: propTypes.string.isRequired
};

export default Tab;
