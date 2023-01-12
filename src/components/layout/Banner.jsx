/** @format */

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../include/Home";
import Calender from "../include/Calender";
import Guest from "../include/Guest";
import SearchBtn from "../include/SearchBtn";
import { mainText } from "../utils/maintext";

const Banner = ({ calendar, calendar2 }) => {
    const [inputs, setInputs] = useState({
        region: "",
        start_date: calendar,
        last_date: calendar2,
        room: "1개",
        tourist: "1명",
    });

    const navigate = useNavigate();

    const { region, start_date, last_date, room, tourist } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const onSearch = () => {
        mainText.map((e)=>(
            e.resionName.includes(region) && navigate(`/resion/${e.resionCode}`, {state: {
                id: e.id,
                start_date: start_date,
                last_date: last_date,
                room: room,
                tourist: tourist
            }})    
        ));

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
                    <Calender start_date={start_date} last_date={last_date} onChange={onChange} />
                    <Guest room={room} tourist={tourist} onChange={onChange} />
                    <SearchBtn onSearch={onSearch} />
                </div>
            </div>
        </section>
    );
};

export default Banner;
