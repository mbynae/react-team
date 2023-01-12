import React from "react";
import { Link } from "react-router-dom";
import { mainText } from "../utils/maintext";

const SearchBtn = ({ onSearch, region, start_date, last_date, room, tourist }) => {
    // if (mainText.filter((e) => e.resionName === region)) {
    //     console.log("실행");
    // } else {
    //     console.log("좆망");
    // }
    mainText.filter((e) => e.resionName === region);

    return (
        <Link to={`/resion/${region}`} onClick={onSearch}>
            <button className="searchBtn">
                <img src="/img/search.svg" alt="검색이미지" />
            </button>
        </Link>
    );
};

export default SearchBtn;
