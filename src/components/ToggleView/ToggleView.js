import React from "react";

import grid from '../../assets/grid.svg';
import list from '../../assets/list.svg';

export const ToggleView = (props) => {
    
    return(
        <button onClick={props.onClick} className="toggle-view-btn float-right">
         <span>Toggle View</span>
         <img  className="toggle-view-img ml-2" src={props.isGrid === true ? list : grid}></img>
        </button>
    )
}

ToggleView.defaultProps = { isGrid: true};
