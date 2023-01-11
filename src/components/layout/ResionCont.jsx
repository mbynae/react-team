/** @format */
import React from "react";
import { useParams } from "react-router-dom";

const resionText = [
    {
        classTitle: "resionCard1",
        imgName: "resionTop01.jpg",
        title: "Seogwipo-si의 아파트",
        bed: "침대1개",
        price1: "₩1,510,703",
        price2: "₩865,561/월",
    },
    {
        classTitle: "resionCard2",
        imgName: "resionTop02.jpg",
        title: "Seogwipo-si의 아파트",
        bed: "침대1개",
        price1: "₩1,510,703",
        price2: "₩865,561/월",
    },
    {
        classTitle: "resionCard3",
        imgName: "resionTop03.jpg",
        title: "Seogwipo-si의 아파트",
        bed: "침대1개",
        price1: "₩1,510,703",
        price2: "₩865,561/월",
    },
    {
        classTitle: "resionCard4",
        imgName: "resionTop04.jpg",
        title: "Seogwipo-si의 아파트",
        bed: "침대1개",
        price1: "₩1,510,703",
        price2: "₩865,561/월",
    },
    {
        classTitle: "resionCard5",
        imgName: "resionTop05.jpg",
        title: "Seogwipo-si의 아파트",
        bed: "침대1개",
        price1: "₩1,510,703",
        price2: "₩865,561/월",
    },
];

function ResionTextName({ classTitle, imgName, title, bed, price1, price2 }) {
    return (
        <div className={`resionTopCard ${classTitle}`}>
            <img src={`${process.env.PUBLIC_URL}/img/${imgName}`} alt="호텔룸" />
            <div className="resionDesc">
                <div className="descTitle">{title}</div>
                <div className="bed">{bed}</div>
                <div className="price">
                    <em>{price1}</em> {price2}
                </div>
            </div>
        </div>
    );
}

function ResionTextName2({ img, Title, star, bed, price2 }) {
    return (
        <div className="resionBomCard">
            <img src={`${img}`} alt="호텔룸" />
            <div className="resionBomdesc">
                <div className="resionBomTitle">{Title}</div>
                <span className="star">★{star}</span>
                <div className="bed">{bed}</div>
                <div className="price">{price2}</div>
            </div>
        </div>
    );
}

const ResionCont = ({ selectCategory, year, month, date, week }) => {
    const { resionCode } = useParams();
    return (
        <section id="contentsType" className="container">
            <div className="resionTop">
                <h2>Recommended Hotels in {resionCode}</h2>
                <div className="checkinDate">
                    <img src="/img/resionCalender.svg" alt="달력" />
                    {week[new Date().getDay()]} {month}/{date}
                </div>
                <div className="checkoutDate">
                    <img src="/img/resionCalender.svg" alt="달력" />
                    {week[new Date().getDay()+1]} {month}/{date+1}
                </div>
                <div className="resion__inner">
                    {resionText.map((info, index) => (
                        <ResionTextName
                            key={index}
                            classTitle={info.classTitle}
                            imgName={info.imgName}
                            title={info.title}
                            bed={info.bed}
                            price1={info.price1}
                            price2={info.price2}
                        />
                    ))}
                    {/* {recommendedCate.map((info, index) => (
                        <ResionTextName 
                            key={index}
                            classTitle={`resionCard1${index+1}`}
                            title={info.listingName}
                            imgName={info.images[0]}
                            bed={info.listingBedLabel}
                            price1={info.discountedPrice}
                            price2={info.accessibilityLabel}
                        />
                    ))} */}
                </div>
                <div className="resionBom__card">
                    <h2>{resionCode} 인근 숙소</h2>
                    <div className="resionbomDate">
                        {month}월 {date}일 {week[new Date().getDay()]} ~ {month}월 {date+1}일 {week[new Date().getDay()+1]}
                    </div>
                    <div className="resionBom__inner">
                        {selectCategory.map((info, index) => (
                            <ResionTextName2
                                key={index}
                                img={info.images[0]}
                                Title={info.listingName}
                                star={info.avgRating}
                                bed={info.listingBedLabel}
                                price2={info.accessibilityLabel}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResionCont;
