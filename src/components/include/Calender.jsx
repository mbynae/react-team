import React from "react";

const Calender = ({ start_date, last_date, onChange }) => {
    return (
        <div className="calender">
            <img src="/img/calender.svg" alt="달력이미지" />
            <input type="date" id="start_date" name="start_date" value={start_date} onChange={onChange} required />
            <span className="date_hyphen">-</span>
            <input type="date" id="last_date" name="last_date" value={last_date} onChange={onChange} required />
        </div>
    );
};

export default Calender;
