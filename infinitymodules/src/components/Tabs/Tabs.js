import React from 'react';
import propTypes from 'prop-types';
import css from './Tabs.css';

class Tabs extends React.Component {

    render() {
        const {theme = 'light', children, onSelect, currentSelectedTab } = this.props;
        console.log(this.props.layout);
        return (
            <div className={`${css[`theme-${theme}`]} `}>
                <div className={`${css.buttonContainer} `}>
                    {children.map((tab, index) =>
                        <button
                            className={
                                currentSelectedTab === tab.props.selectionKey ?
                                css.activeButton :
                                css.button}
                            key={index}
                            onClick={() => onSelect(tab.props.selectionKey)}>
                            {tab.props.title}
                        </button>)
                    }
                </div>
                {children[currentSelectedTab - 1]}
            </div>
        );

    };

}

Tabs.propTypes = {
    theme: propTypes.string.isRequired,
    layout: propTypes.string.isRequired,
    onSelect: propTypes.func.isRequired,
    currentSelectedTab: propTypes.number,
}

Tabs.defaultProps = {
    theme: "light",
    layout: "horizontal",
}


export default Tabs;
