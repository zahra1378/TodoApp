import React from "react";
import './FilterFooter.css';

const FilterFooter = ()=> {
    return(
        <div className="FilterFooter">
            <div className="FilterFooter__countItems">
                3 items
            </div>
            <div className="FilterFooter__filters">
                <ul>
                    <li>
                        <button>All</button>
                    </li>
                    <li>
                        <button>Active</button>
                    </li>
                    <li>
                        <button className="active">Completed</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterFooter;