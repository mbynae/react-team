/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./components/pages/Main";
import Resion from "./components/pages/Resion";
import Reservation from "./components/pages/Reservation";
import Aside from "./components/layout/Aside";
import Header from "./components/layout/Header";
import Banner from "./components/layout/Banner";
import Footer from "./components/layout/Footer";

const App = () => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1 < 10 ? `0${new Date().getMonth() + 1}` : new Date().getMonth() + 1;
    let date = new Date().getDate() < 10 ? `0${new Date().getDate()}` : new Date().getDate();
    let week = new Array("일", "월", "화", "수", "목", "금", "토");
    // let calendar = `${year}-${month}-${date}`;
    let calendar = `${year}-${month}-${date}`;
    let calendar2 = `${year}-${month}-${date + 1}`;

    return (
        <BrowserRouter>
            <div className="all score">
                <Aside />
                <div className="right">
                    <Header calendar={calendar} />
                    <Banner calendar={calendar} calendar2={calendar2} year={year} month={month} date={date} />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/resion/:resionCode" element={<Resion calendar={calendar} year={year} month={month} date={date} week={week} />} />
                        <Route path="/reservation" element={<Reservation />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
