/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/content";

const Aside = ({ selectCategory, setSelectCategory }) => {
    // const left = document.querySelector(".left");
    // const aside = document.getElementById("aside");
    // const regionBox = document.querySelector(".region_box");
    // const headerImg = document.querySelector("#header img");

    // left.addEventListener("mouseenter", (e) => {
    //     aside.classList.remove("active");
    //     regionBox.style.left = "0";
    //     headerImg.style.transform = "translate(120px, 10px)";
    //     headerImg.style.transition = "all 0.4s 0.09s";
    // });
    // left.addEventListener("mouseleave", (e) => {
    //     aside.classList.add("active");
    //     regionBox.style.left = "-15%";
    //     headerImg.style.transform = "translate(0, 10px)";
    //     headerImg.style.transition = "all 0.2s";
    // });

    return (
        <div className="left">
            <aside id="aside">
                <div className="aside__inner">
                    <div className="menu">
                        <img src="img/menu.jpg" alt="메뉴" />
                    </div>
                    <div className="region">
                        {categories.map((category) => (
                            <button
                                // style={{
                                //   backgroundColor:
                                //     category.name === selectCategory ? '#ff8282' : 'transparent',
                                // }}
                                key={category.name}
                                onClick={() => setSelectCategory(category.name)}
                            >
                                <Link to="/resion">
                                    <img src={category.icon} alt="지역사진" />
                                    <span>{category.name}</span>
                                </Link>
                            </button>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
        // <div className="left">
        //     <aside id="aside" className="active">
        //         <div className="aside__inner">
        //             <div className="menu">
        //                 <img src="img/menu.jpg" alt="메뉴" />
        //             </div>
        //             <div className="region">
        //                 <img src="img/seoul.jpg" alt="서울" />
        //                 <img src="img/daegu.jpg" alt="대구" />
        //                 <img src="img/daejeon.jpg" alt="대전" />
        //                 <img src="img/busan.jpg" alt="부산" />
        //                 <img src="img/gyeongju.jpg" alt="경주" />
        //                 <img src="img/jeonju.jpg" alt="전주" />
        //                 <img src="img/jeju.jpg" alt="제주" />
        //                 <img src="img/gangneung.jpg" alt="강릉" />
        //             </div>
        //             {/* <div className="scroll">0</div> */}
        //         </div>
        //     </aside>
        //     <div className="region_box">
        //         <div className="region_name">
        //             <li>서울</li>
        //             <li>대구</li>
        //             <li>대전</li>
        //             <li>부산</li>
        //             <li>경주</li>
        //             <li>전주</li>
        //             <li>제주</li>
        //             <li>강릉</li>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Aside;
