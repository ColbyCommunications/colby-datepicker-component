/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Portal } from 'react-overlays';
import './style.css';

const elementId = 'colby-datepicker';

const CalendarContainer = ({ children }) => (
    <Portal container={document.getElementById(elementId)}>{children}</Portal>
);

/** Show an input field and a calendar which helps to pick the date */
export default class ColbyDatePicker extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        dateFormat: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        onChange: PropTypes.func,
        placeholderText: PropTypes.string,
        selected: PropTypes.object,
        useDateFormatAsPlaceholder: PropTypes.bool,
    };

    static defaultProps = {
        className: 'form-control',
        dateFormat: 'MM/dd/yyyy',
        onChange: () => {},
        placeholderText: '',
        useDateFormatAsPlaceholder: false,
        selected: null,
    };

    constructor(props) {
        super(props);

        // Add div to the body where we will render the calendar
        if (!document.getElementById(elementId)) {
            const div = document.createElement('div');
            div.setAttribute('id', elementId);
            div.setAttribute('style', 'position: absolute; top: 0; left: 0; z-index: 1500;');

            document.body.appendChild(div);
        }
    }

    render() {
        // eslint-disable-next-line react/destructuring-assignment
        const { dateFormat, placeholderText, useDateFormatAsPlaceholder } = this.props;
        let placeholder = placeholderText;
        if (!placeholder && useDateFormatAsPlaceholder && typeof dateFormat === 'string') {
            placeholder = dateFormat;
        }
        return (
            <DatePicker
                {...this.props}
                placeholderText={placeholder}
                popperContainer={CalendarContainer}
            />
        );
    }
}
