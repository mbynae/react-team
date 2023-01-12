/** @format */

import React, { useState } from "react";
import Home from "../include/Home";
import Calender from "../include/Calender";
import Guest from "../include/Guest";
import SearchBtn from "../include/SearchBtn";

const Banner = ({ calendar, calendar2 }) => {
    const [inputs, setInputs] = useState({
        region: "",
        start_date: calendar,
        last_date: calendar2,
        room: "1개",
        tourist: "1명",
    });

    const { region, start_date, last_date, room, tourist } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onSearch = () => {
        setInputs({
            region: "",
            start_date: calendar,
            last_date: calendar2,
            room: "1개",
            tourist: "1명",
        });
    };

    return (
        <section id="bannerType">
            <img src="/img/banner.jpg" alt="배너이미지" />
            <div className="bannerInput">
                <h2 className="poppins">Find your travel moments and leave!</h2>
                <div className="roomSearch">
                    <legend className="ir">호텔 검색</legend>
                    <Home region={region} onChange={onChange} />
                    <Calender start_date={start_date} last_date={last_date} />
                    <Guest room={room} tourist={tourist} />
                    <SearchBtn onSearch={onSearch} region={region} start_date={start_date} last_date={last_date} room={room} tourist={tourist} />
                </div>
            </div>
        </section>
    );
};

export default Banner;
