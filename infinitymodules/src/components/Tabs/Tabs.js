import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const selectedProps = this.props.currentSelectedTab;
        console.log(selectedProps);
        console.log(this.props.onSelect);
        console.log(this.props.children[selectedProps]);
        return (

            <div className={`${styles[`Tabs-${this.props.theme}`]}`}>
                {this.props.theme}
                <div className={`${styles[`Tabs-${this.props.layout}`]}`}>
                    {this.props.layout}
                    {this.props.children[selectedProps]}
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    theme: PropTypes.string.isRequired,
    layout: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    currentSelectedTab: PropTypes.number,
}

Tabs.defaultProps = {
    theme: "light",
    layout: "horizontal",

}


export default Tabs;
