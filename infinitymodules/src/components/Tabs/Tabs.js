import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tabs.css';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTab: null
        }
    }

    buildTabs() {
        var tabs = [];
        for(var i = 0; i < this.props.children.length; i++) {
            console.log('slectionkey ' + this.props.children[i].props.selectionKey);
            console.log('title ' + this.props.children[i].props.title);
            tabs.push(<button onClick={ () => this.props.onSelect(this.props.children[i].props.selectionKey)} key={this.props.children[i].props.selectionKey}>{this.props.children[i].props.title}</button>);
        }
        return tabs;
    }

    render() {

        var tabs = this.buildTabs();
        const selectedProps = this.props.currentSelectedTab;

        console.log(tabs);

        return (

            <div className={`${styles[`Tabs-${this.props.theme}`]}`}>
                {this.props.theme}
                <div className={`${styles[`Tabs-${this.props.layout}`]}`}>
                    {tabs}
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
