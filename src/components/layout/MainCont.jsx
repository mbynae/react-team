/** @format */
import React from "react";
import { Link } from "react-router-dom";
import { mainText } from "../utils/maintext";

function MainTextName({ imgName, resionName, resionCode }) {
    return (
        <div className="resion">
            <Link to={`/resion/${resionCode}`}>
                <img src={`img/${imgName}`} alt={resionName} />
            </Link>
            <span>{resionName}</span>
        </div>
    );
}

const MainCont = () => {
    // const [selectCategory, setSelectCategory] = useState("서울");

    // useEffect(() => {
    //     fetch(
    //         "https://raw.githubusercontent.com/Kim-chanmi/react-team/main/src/components/utils/Seoul.json"
    //     )
    //         .then((response) => response.json())
    //         .then((result) => console.log(result.data))
    //         .catch((error) => console.log("error", error));
    // }, [selectCategory]);

    return (
        <section id="contentsType" className="container">
            <div className="contents__top">
                <div className="title">
                    <h2 className="chosun">스폐셜 호텔</h2>
                    <p className="chosun">SPECIAL HOTEL</p>
                </div>
                <div className="cardType">
                    <div className="card__inner">
                        <div className="card card1">
                            <Link to="/reservation">
                                <img
                                    src="/img/mainCard01.jpg"
                                    alt="서울시그니엘"
                                />
                            </Link>
                            <span className="card_name">
                                <em className="card_region">서울</em>
                                <em className="card_hotel">시그니엘</em>
                            </span>
                        </div>
                        <div className="card card2">
                            <Link to="/reservation">
                                <img
                                    src="/img/mainCard02.jpg"
                                    alt="제주 그랜드 하얏트"
                                />
                            </Link>
                            <span className="card_name">
                                <em className="card_region">제주</em>
                                <em className="card_hotel">그랜드 하얏트</em>
                            </span>
                        </div>
                        <div className="cardCenter card3">
                            <Link to="/reservation">
                                <img
                                    src="/img/mainCard03.jpg"
                                    alt="서울 신라 호텔"
                                />
                            </Link>
                            <span className="card_name">
                                <em className="card_region">서울</em>
                                <em className="card_hotel">신라 호텔</em>
                            </span>
                        </div>
                        <div className="card card4">
                            <Link to="/reservation">
                                <img
                                    src="/img/mainCard04.jpg"
                                    alt="대구 디지털 하우스"
                                />
                            </Link>
                            <span className="card_name">
                                <em className="card_region">대구</em>
                                <em className="card_hotel">디지털 하우스</em>
                            </span>
                        </div>
                        <div className="card card5">
                            <Link to="/reservation">
                                <img
                                    src="/img/mainCard05.jpg"
                                    alt="부산 파라다이스 호텔"
                                />
                            </Link>
                            <span className="card_name">
                                <em className="card_region">부산</em>
                                <em className="card_hotel">파라다이스 호텔</em>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contents__bom">
                <h2>여행가고 싶은 지역을 선택해주세요.</h2>
                <div className="selectResion">
                    {mainText.map((info, index) => (
                        <MainTextName
                            key={index}
                            imgName={info.imgName}
                            resionName={info.resionName}
                            resionCode={info.resionCode}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainCont;
