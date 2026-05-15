import { Link } from "react-router";

function RestaurantCard({restInfo}) {
    return(
    <Link to={"/city/delhi/"+restInfo?.info?.id}>
    <div className="max-w-70 mb-2 transform transition duration-200 hover:scale-95">
        <img className="w-70 h-45 object-cover rounded-xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo?.info?.cloudinaryImageId} alt="" />
        <div className="w-[95%] mx-auto mt-3">
            <div className="font-bold text-lg">{restInfo?.info?.name}</div>
            <div className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-green-600">
            <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.87 1.402-8.168L.132 9.211l8.2-1.193z"/>
            </svg>
                <span className="text-lg">{restInfo.info.avgRating}</span>
                <span className="text-lg font-medium">{restInfo.info.sla.slaString}</span>
            </div>
            <div className="text-gray-700 overflow-hidden mt-1 h-7">{restInfo?.info?.cuisines.join(", ")}</div>
            <div className="text-gray-700">{restInfo?.info?.areaName}</div>
        </div>
    </div>
    </Link>
    )
}

export default RestaurantCard;