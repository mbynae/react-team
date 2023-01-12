import React from "react";

const Guest = ({ room, tourist, onChange}) => {
    return (
        <div className="guest">
            <img src="/img/person.svg" alt="사람이미지" />
            <label htmlFor="room">객실</label>
            <select id="room" name="room" defaultValue={room} onChange={onChange} required>
                <option value="1개">1개</option>
                <option value="2개">2개</option>
                <option value="3개">3개</option>
                <option value="4개">4개</option>
            </select>
            <label htmlFor="tourist">투숙객</label>
            <select id="tourist" name="tourist" defaultValue={tourist} onChange={onChange} required>
                <option value="1명">1명</option>
                <option value="2명">2명</option>
                <option value="3명">3명</option>
                <option value="4명">4명</option>
                <option value="5명">5명</option>
                <option value="단체">단체</option>
            </select>
        </div>
    );
};

export default Guest;
