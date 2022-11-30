/** @format */

import React from "react";
// import KakaoMap from "./KakaoMap";

// { useRef, useEffect }

const reservationText = [
    {
        imgName: "package01.jpg",
        location: "그랜드 디럭스 더블 - 게스트 룸",
    },
    {
        imgName: "package02.jpg",
        location: "로비",
    },
    {
        imgName: "package03.jpg",
        location: "수영장",
    },
];

function ReservationTextName({ imgName, location }) {
    return (
        <div className="package">
            <img src={`/img/${imgName}`} alt="호텔룸" />
            <div className="name">{location}</div>
        </div>
    );
}

const ReservationCont = () => {
    // export const Map = () => {
    //   const { kakao } = window;
    //   const mapRef = useRef<HTMLDivElement>(null);
    //   useEffect(() => {
    //     const container = mapRef.current;
    //     const options = {
    //       center: new kakao.maps.LatLng(33.450701, 126.570667),
    //       level: 5,
    //     };
    //     // 지도 객체 생성
    //     const map = new kakao.maps.Map(container, options);

    //   }, []);

    //   return (
    //     <>
    //       <Div ref={mapRef}></Div>
    //     </>
    //   )
    // }

    // const Div = styled.div`
    //   width: 100vw;
    //   height: 100vh;
    // `;

    // const { kakao } = window;

    // let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    // let options = {
    //   //지도를 생성할 때 필요한 기본 옵션
    //   center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
    //   level: 3, //지도의 레벨(확대, 축소 정도)
    // };

    // let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    // const mapRef = useRef < HTMLDivElement > null;
    // useEffect(() => {
    //   const container = mapRef.current;
    //   console.log(container);
    // }, [mapRef]);

    return (
        <section id="contentsType" className="container">
            <div className="reservation__wrap">
                <div className="reservation__inner">
                    <div className="reservationBanner">
                        <div
                            className="reservation_img"
                            style={{
                                backgroundImage: `url(${"/img/reservation.jpg"})`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                            }}
                        >
                            <div className="reservationDesc">
                                <div className="title">시그니엘 서울</div>
                                <div className="address">
                                    서울 송파구 올림픽로 300 롯데월드타워
                                    76-101층
                                </div>
                                <div className="chechInfo">
                                    <form action="#">
                                        <div className="checkInOut">
                                            <em>체크인</em>
                                            <em>체크아웃</em>
                                        </div>
                                        <div className="date">
                                            <input
                                                type="date"
                                                id="start_date"
                                                name="start_date"
                                                defaultValue="2022-11-21"
                                                required
                                            />
                                            <span>|</span>
                                            <input
                                                type="date"
                                                id="last_date"
                                                name="last_date"
                                                defaultValue="2022-11-23"
                                                required
                                            />
                                            {/* <em>11월 18일(금)</em> 11월
                                                    20일(일) */}
                                        </div>
                                        <div className="roominfo">
                                            <div className="check">
                                                <label htmlFor="roomcount">
                                                    객실 수
                                                </label>
                                                <select
                                                    name="roomcount"
                                                    id="roomcount"
                                                >
                                                    <option defaultValue="1개">
                                                        1개
                                                    </option>
                                                    <option defaultValue="2개">
                                                        2개
                                                    </option>
                                                    <option defaultValue="3개">
                                                        3개
                                                    </option>
                                                    <option defaultValue="4개">
                                                        4개
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="check">
                                                <label htmlFor="adultcount">
                                                    성인
                                                </label>
                                                <select
                                                    name="adultcount"
                                                    id="adultcount"
                                                >
                                                    <option defaultValue="성인1명">
                                                        1명
                                                    </option>
                                                    <option defaultValue="성인2명">
                                                        2명
                                                    </option>
                                                    <option defaultValue="성인3명">
                                                        3명
                                                    </option>
                                                    <option defaultValue="성인4명">
                                                        4명
                                                    </option>
                                                    <option defaultValue="성인4명">
                                                        단체
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="check">
                                                <label htmlFor="childcount">
                                                    어린이
                                                </label>
                                                <select
                                                    name="childcount"
                                                    id="childcount"
                                                >
                                                    <option defaultValue="어린이1명">
                                                        1명
                                                    </option>
                                                    <option defaultValue="어린이2명">
                                                        2명
                                                    </option>
                                                    <option defaultValue="어린이3명">
                                                        3명
                                                    </option>
                                                    <option defaultValue="어린이4명">
                                                        4명
                                                    </option>
                                                    <option defaultValue="어린이4명">
                                                        단체
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <button className="button">
                                            선택 완료
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="roomm__package">
                        <h2>객실 패키지</h2>
                        <div className="package__inner">
                            {reservationText.map((info, index) => (
                                <ReservationTextName
                                    key={index}
                                    imgName={info.imgName}
                                    location={info.location}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="room__place">
                        <h2>위치</h2>
                        {/* <KakaoMap /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReservationCont;
