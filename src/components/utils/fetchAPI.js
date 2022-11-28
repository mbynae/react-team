/** @format */

// const axios = require("axios"); 자바스크립트 방식
import axios from "axios";

const BASE_URL = "https://airbnb19.p.rapidapi.com";

const options = {
    url: BASE_URL,
    params: {
        maxResults: "10",
    },
    headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_REPID_APIKEY,
        "X-RapidAPI-Host": "airbnb19.p.rapidapi.com",
    },
};

export const fetchAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
};
