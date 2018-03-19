import React from 'react';
import css from './Tab.css'





class Tab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const {selectionKey, title} = this.props;
        return (
            <div className={css.tabBody}>
                <div>{title}</div>
                <div>{selectionKey}</div>
            </div>
        );
    };
}

export default Tab;
