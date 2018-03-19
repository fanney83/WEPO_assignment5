import React from 'react';
import PropTypes from 'prop-types';

var months = ['Jan', 'Feb', 'Mars', ]


const date = new Date();

class DatePicker extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            year: date.getFullYear(),
            month: date.getMonth()
        }
    }

    getDays() {

    }

    render() {
        const getAllDays = this.getDays();


        return (
            <div >
                {this.state.year}
                {this.state.month + 1}
                {date.getDay()}
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
