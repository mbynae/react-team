/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    window.addEventListener("scroll", () => {
        let scrollTop = window.scrollY;
        // scroller.innerText = Math.round(scrollTop);
        headerSearchBar(scrollTop);
    });

    function headerSearchBar(scrollTop) {
        const headerSearch = document.getElementById("header_search");
        const roomSearch = document.querySelector("#bannerType .roomSearch");
        console.log(roomSearch.offsetTop);

        if (scrollTop >= roomSearch.offsetTop * 3) {
            headerSearch.classList.remove("close");
        } else {
            headerSearch.classList.add("close");
        }
    }

    return (
        <>
            <header id="header">
                <Link to="/">
                    <img src="/img/logo.png" alt="로고이미지" />
                </Link>
                <form
                    action="/"
                    method="GET"
                    id="header_search"
                    className="close"
                >
                    <fieldset className="roomSearch">
                        <legend className="ir">호텔 검색</legend>
                        <div className="home">
                            <label htmlFor="region"></label>
                            <img src="/img/home.svg" alt="집이미지" />
                            <input
                                type="text"
                                id="region"
                                name="region"
                                placeholder="도시/호텔을 적어주세요."
                                required
                            />
                        </div>
                        <div className="calender">
                            <img src="/img/calender.svg" alt="달력이미지" />
                            <input
                                type="date"
                                id="start_date"
                                name="start_date"
                                defaultValue="2022-11-21"
                                required
                            />
                            <span className="date_hyphen">-</span>
                            <input
                                type="date"
                                id="last_date"
                                name="last_date"
                                defaultValue="2022-11-23"
                                required
                            />
                        </div>
                        <div className="guest">
                            <img src="/img/person.svg" alt="사람이미지" />
                            <label htmlFor="room">객실</label>
                            <select id="room" name="room" required>
                                <option defaultValue="1개">1개</option>
                                <option defaultValue="2개">2개</option>
                                <option defaultValue="3개">3개</option>
                                <option defaultValue="4개">4개</option>
                            </select>
                            <label htmlFor="tourist">투숙객</label>
                            <select id="tourist" name="tourist" required>
                                <option defaultValue="1명">1명</option>
                                <option defaultValue="2명">2명</option>
                                <option defaultValue="3명">3명</option>
                                <option defaultValue="4명">4명</option>
                                <option defaultValue="5명">5명</option>
                                <option defaultValue="단체">단체</option>
                            </select>
                        </div>
                        <button className="searchBtn">
                            <img src="/img/search.svg" alt="검색이미지" />
                        </button>
                    </fieldset>
                </form>
            </header>
        </>
    );
};

export default Header;
