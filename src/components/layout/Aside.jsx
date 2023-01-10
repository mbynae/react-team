/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../utils/content";

const Aside = () => {
    return (
        <div className="left">
            <aside id="aside">
                <div className="aside__inner">
                    <div className="menu">
                        <img src="/img/menu.jpg" alt="메뉴" />
                    </div>
                    <div className="region">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                // onClick={() => setSelectCategory(category.name)}
                            >
                                <Link to={`/resion/${category.resionCode}`} state={{id: category.id}}>
                                    <img src={category.icon} alt="지역사진" />
                                    <span>{category.name}</span>
                                </Link>
                            </button>
                        ))}
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Aside;
