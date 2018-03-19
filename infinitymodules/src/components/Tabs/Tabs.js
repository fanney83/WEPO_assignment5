import React from 'react';
import Tab from '../Tab/Tab';
import css from './Tabs.css';

class Tabs extends React.Component {
    render() {
        const {theme = 'light', children, onSelect, currentSelectedTab } = this.props;
        return (
            <div className={css[`theme-${theme}`]}>
                <div className={css.buttonContainer}>
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

export default Tabs;
