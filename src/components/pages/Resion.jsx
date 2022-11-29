/** @format */

import React from "react";
import { useEffect, useState } from "react";
import ResionCont from "../layout/ResionCont";

const Resion = ({ resionCode }) => {
    const [selectCategory, setSelectCategory] = useState([]);

    useEffect(() => {
        fetch(
            `https://raw.githubusercontent.com/Kim-chanmi/react-team/main/src/components/utils/${resionCode}.json`
        )
            .then((response) => response.json())
            // .then((result) => setSelectCategory(result.data))
            .then((result) => console.log(result.data))
            .catch((error) => console.log("error", error));
    }, []);

    // 임시 스크립트(airbnb api로 넘어갈시 삭제)
    const resionBomCard = document.querySelectorAll(".resionBomCard");
    resionBomCard.forEach((e, i) => {
        if (i > 11) {
            resionBomCard[i].style.display = "none";
        }
    });

    return <ResionCont selectCategory={selectCategory} />;
};

export default Resion;
