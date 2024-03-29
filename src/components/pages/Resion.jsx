/** @format */

import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResionCont from "../layout/ResionCont";
import Loader from "../layout/Loader";

const Resion = ({ calendar, calendar2, year, month, date, week }) => {
    const location = useLocation();
    const id = location.state.id;
    const start_date = location.state.start_date;
    const last_date = location.state.last_date;
    const room = location.state.room;
    const tourist = location.state.tourist;
    const [selectCategory, setSelectCategory] = useState([]);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "cd899b7274msh596cd06f630aefdp1b8282jsn72ce399608b0",
                "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
            },
        };

        fetch(
            `https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=${id}&totalRecords=12&currency=KRW&category=TAB_8253&adults=1&checkin=${start_date}&checkout=${last_date}&languageId=ko-KR`,
            options
        )
            .then((response) => response.json())
            .then((result) => setSelectCategory(result.data))
            // .then((result) => console.log(result.data))
            .catch((error) => console.log("error", error));

    }, [id]);

    if (!selectCategory) return <Loader />;

    return <ResionCont selectCategory={selectCategory} calendar={calendar} calendar2={calendar2} year={year} month={month} date={date} week={week} start_date={start_date} last_date={last_date} />;
};

export default Resion;
