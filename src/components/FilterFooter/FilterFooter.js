import React, { useState } from "react";
import './FilterFooter.css';

const FilterFooter = ({tasks, updateFilter})=> {
    const [ filter, setFilter ] = useState('all');

    const handleFilter = (filterName)=>{
        setFilter(filterName);
        updateFilter(filterName);
    }
    return(
        <div className="FilterFooter">
            <div className="FilterFooter__countItems">
                {tasks.length} items
            </div>
            <div className="FilterFooter__filters">
                <ul>
                    <li>
                        <button className={filter === 'all' ? 'active' : ''}  onClick={()=>handleFilter('all')}>All</button>
                    </li>
                    <li>
                        <button className={filter === 'active' ? 'active' : ''}  onClick={()=>handleFilter('active')}>Active</button>
                    </li>
                    <li>
                        <button className={filter === 'completed' ? 'active' : ''} onClick={()=>handleFilter('completed')}>Completed</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterFooter;