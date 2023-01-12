import React from "react";

const Home = ({ region, onChange }) => {
    return (
        <div className="home">
            <label htmlFor="region"></label>
            <img src="/img/home.svg" alt="집이미지" />
            <input type="text" id="region" name="region" placeholder="도시를 입력해주세요." value={region} onChange={onChange} required />
        </div>
    );
};

export default Home;
