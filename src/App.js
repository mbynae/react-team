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
    return (
        <BrowserRouter>
            <div className="all score">
                <Aside />
                <div className="right">
                    <Header />
                    <Banner />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route
                            path="/resion/:resionCode"
                            element={<Resion />}
                        />
                        <Route path="/reservation" element={<Reservation />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
