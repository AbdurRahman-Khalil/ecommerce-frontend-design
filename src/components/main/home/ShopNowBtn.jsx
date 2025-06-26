import { Link } from "react-router-dom";


export const ShopNowBtn = ({ btnWidth }) => {
    return (
        <Link to={"/products"}>
            <button className={`${btnWidth} shopnow-btn`}>Shop now</button>
        </Link>
    );
};
