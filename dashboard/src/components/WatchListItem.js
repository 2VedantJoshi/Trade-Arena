import { useState, useContext } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { Grow, Tooltip } from "@mui/material";
import GeneralContext from "./GeneralContext";

export default function WatchListItem({ stock }) {
    const [showWatchListAction, setShowWatchListAction] = useState(false);

    const handleMouseEnter = () => {
        setShowWatchListAction(true);
    };

    const handleMouseLeave = () => {
        setShowWatchListAction(false);
    };

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ?     
                        (<KeyboardArrowDownIcon className="down"/>) 
                        : (<KeyboardArrowUpIcon className="up"/>)
                    }
                    <span className="price">
                        {stock.price}
                    </span>
                </div>
            </div>
            {showWatchListAction && <WatchListActions uid={stock.name} />}
        </li>
    );
}

const WatchListActions = ({ uid }) => {
    const ctx = useContext(GeneralContext);
    
    const handleBuyClick = () => {
        ctx.openBuyWindow(uid);
    };
    
    return (
        <span className="actions">
            <span>
                <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
                    <button className="buy" onClick={handleBuyClick}>Buy</button>
                </Tooltip>
                <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
                    <button className="sell">Sell</button>
                </Tooltip>
                <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
                    <button className="action"><BarChartOutlinedIcon className="icon" /></button>
                </Tooltip>
                <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
                    <button className="action"><MoreHorizIcon className="icon" /></button>
                </Tooltip>
            </span>
        </span>
    );
};
