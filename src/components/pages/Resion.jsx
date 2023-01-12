/** @format */

import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ResionCont from "../layout/ResionCont";
import Loader from "../layout/Loader";

const Resion = ({ calendar, calendar2, year, month, date, week }) => {
    const location = useLocation();
    const id = location.state.id;
    const [selectCategory, setSelectCategory] = useState([]);
    // const [recommendedCate, setRecommendedCate] = useState([]);

    useEffect(() => {
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "cd899b7274msh596cd06f630aefdp1b8282jsn72ce399608b0",
                "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
            },
        };

        // fetch(
        //     `https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=${id}&totalRecords=1&currency=KRW&category=TAB_8253&adults=1&checkin=${calendar}&checkout=${calendar2}&languageId=ko-KR`,
        //     options
        // )
        //     .then((response) => response.json())
        //     .then((result) => setSelectCategory(result.data))
        //     // .then((result) => console.log(result.data))
        //     .catch((error) => console.log("error", error));

        // fetch(`https://airbnb19.p.rapidapi.com/api/v1/searchPropertyByPlace?id=${id}&totalRecords=1&currency=KRW&offset=12&category=TAB_8253&adults=1&languageId=ko-KR`, options)
        // .then((response) => response.json())
        // .then((result) => setRecommendedCate(result.data))
        // // .then((result) => console.log(result.data))
        // .catch((error) => console.log("error", error));
    }, [id]);

    if (!selectCategory) return <Loader />;

    return <ResionCont selectCategory={selectCategory} year={year} month={month} date={date} week={week} />;
};

export default Resion;
