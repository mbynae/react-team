import React from "react";

const Calender = ({ calendar, calendar2, start_date, last_date }) => {
    return (
        <div className="calender">
            <img src="/img/calender.svg" alt="달력이미지" />
            <input type="date" id="start_date" name="start_date" defaultValue={start_date} required />
            <span className="date_hyphen">-</span>
            <input type="date" id="last_date" name="last_date" defaultValue={last_date} required />
        </div>
    );
};

export default Calender;
