import React from "react";

const SearchBtn = ({ onSearch, region, start_date, last_date, room, tourist }) => {

    return (
        <button className="searchBtn" onClick={onSearch}>
            <img src="/img/search.svg" alt="검색이미지" />
        </button>
    );
};

export default SearchBtn;
