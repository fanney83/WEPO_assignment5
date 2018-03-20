import React from 'react';
import PropTypes from 'prop-types';
import css from './DatePicker.css';

var months = ['Jan', 'Feb', 'Mars', ]


const date = new Date();

class DatePicker extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            year: 0,
            month: 0,
            day: 0,
            weekday: 0
        }
    }

    componentDidMount() {
        this.setState({year: date.getFullYear(), month:date.getMonth(), day:date.getDate() , weekday:date.getDay() });
    }

    render() {


        // https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_weekday

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        var d = new Date();
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        console.log("The current month is " + months[d.getMonth()]);
        console.log('today is: ' + days[d.getDay()]);


        return (
            <div className={css.container}>
                <h2>Today is {d.toLocaleString(this.props.locale)} </h2>
                <div className={css.row}>
                    <h3>Set the year to {this.state.year}</h3>
                    <div className={css.yearBtn}>
                        <button className={css.btnUP} onClick={() => this.setState({year: this.state.year + 1})}></button>
                        <button className={css.btnDWN} onClick={() => this.setState({year: this.state.year - 1})}></button>
                    </div>
                </div>
                <div className={css.row}>
                    <h3>month to {months[this.state.month]}</h3>
                    <div className={css.monthBtn}>
                        <button className={css.btnUP}  onClick={() => this.setState({month: this.state.month + 1})}></button>
                        <button className={css.btnDWN}  onClick={() => this.setState({month: this.state.month - 1})}></button>
                    </div>
                </div>
                <div className={css.row}>
                    <h3>and the day to {this.state.day}</h3>
                    <div className={css.dayBtn}>
                        <button className={css.btnUP}  onClick={() => this.setState({day: this.state.day + 1, weekday:this.state.weekday + 1})}></button>
                        <button className={css.btnDWN}  onClick={() => this.setState({day: this.state.day - 1, weekday:this.state.weekday - 1})}></button>
                    </div>
                </div>
                <div className={css.row}>
                    <h3 className={css.lastline}>which is {days[this.state.weekday]}</h3>
                </div>
            </div>
        );

    }
}

DatePicker.propTypes = {
    onDatePick: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
}

DatePicker.defaultProps = {
    locale: "is-IS"
};

export default DatePicker;
