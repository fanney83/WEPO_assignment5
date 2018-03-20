import React from 'react';
import PropTypes from 'prop-types';

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
            <div >
                <h2>Today is {d.toLocaleString(this.props.locale)} </h2>
                <h3>Set year to {this.state.year}, month to {months[this.state.month]} and the day {this.state.day} which is {days[this.state.weekday]}</h3>
                <button onClick={() => this.setState({year: this.state.year + 1})}>+</button>
                <button onClick={() => this.setState({year: this.state.year - 1})}>-</button>
                <button onClick={() => this.setState({month: this.state.month + 1})}>+</button>
                <button onClick={() => this.setState({month: this.state.month - 1})}>-</button>
                <button onClick={() => this.setState({day: this.state.day + 1, weekday:this.state.weekday + 1})}>+</button>
                <button onClick={() => this.setState({day: this.state.day - 1, weekday:this.state.weekday - 1})}>-</button>
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
