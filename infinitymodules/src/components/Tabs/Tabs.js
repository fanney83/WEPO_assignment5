import React from 'react';
import Tab from '../Tab/Tab';
import css from './Tabs.css';

class Tabs extends React.Component {


    onSelect(currentSelectedTab) {
        var x = document.getElementsByClassName('Tab');
        for (var i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        document.getElementsByClassName(currentSelectedTab).style.display = "block";
    }
    constructor(props) {
        super(props);
        this.state = {
            currentSelectedTab: 1,
            title: ''
        };

    }
    render() {
        const {colorTheme = 'dark', children, currentSelectedTab } = this.props;
        return (
            <div className={css[`theme-${colorTheme}`]}>
                <button onClick={()=>this.onSelect(this.state.currentSelectedTab)}>{children}</button>
                {console.log(css[`theme-${colorTheme}`])}
            </div>
        );
    };

}

export default Tabs;
