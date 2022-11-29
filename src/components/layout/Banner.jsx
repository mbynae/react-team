/** @format */

import React from "react";

const Banner = () => {
    return (
        <section id="bannerType">
            <img src="img/banner.jpg" alt="배너이미지" />
            <div className="bannerInput">
                <h2 className="poppins">Find your travel moments and leave!</h2>
                <form action="/" method="GET">
                    <fieldset className="roomSearch">
                        <legend className="ir">호텔 검색</legend>
                        <div className="home">
                            <label htmlFor="region"></label>
                            <img src="img/home.svg" alt="집이미지" />
                            <input
                                type="text"
                                id="region"
                                name="region"
                                placeholder="도시 또는 호텔을 입력해주세요."
                                required
                            />
                        </div>
                        <div className="calender">
                            <img src="img/calender.svg" alt="달력이미지" />
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
                            {/* <span>11/18 금 - 11/19 토</span>  */}
                        </div>
                        <div className="guest">
                            <img src="img/person.svg" alt="사람이미지" />
                            <label htmlFor="room">객실</label>
                            <select id="room" name="room" required>
                                <option defaultValue="1개">1개</option>
                                <option defaultValue="2개">2개</option>
                                <option defaultValue="3개">3개</option>
                                <option defaultValue="4개">4개</option>
                            </select>
                            {/* <span>객실 1개, 투숙객 2명</span>  */}
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
                            <img src="img/search.svg" alt="검색이미지" />
                        </button>
                    </fieldset>
                </form>
            </div>
        </section>
    );
};

export default Banner;
