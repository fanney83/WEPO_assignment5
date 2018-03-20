import React from 'react';
import PropTypes from 'prop-types';

var months = ['Jan', 'Feb', 'Mars', ]


const date = new Date();

class DatePicker extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDay()
        }
    }

    getDays() {

    }

    render() {
        const getAllDays = this.getDays();
        // https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_weekday

        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

        var d = new Date();
        const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const months = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];

        console.log("The current month is " + months[d.getMonth()]);
        console.log('today is: ' + days[d.getDay()]);
        console.log('todays date is: ' + d.toUTCString());
        console.log('todays date is: ' + d.toDateString());
        console.log(d.getDate());
        // var d = new Date(99,5,24);
        console.log(d.toDateString());

        console.log(d.toLocaleString(this.props.locale));

        return (
            <div >
                <h2>Today is {d.toLocaleString(this.props.locale)} </h2>
                <button>+</button>
                <button>-</button>
                <button>+</button>
                <button>-</button>
                <button>+</button>
                <button>-</button>

                <button>Done</button>
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
