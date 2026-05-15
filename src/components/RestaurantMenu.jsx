import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router";

function RestaurantMenu(){
    let {id} = useParams();
    const [RestData, setRestData] = useState([]);
    const [selected, setSelected] = useState(null);

    useEffect(()=>{
        async function fetchData(){

            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((items)=> 'title' in items?.card?.card);
            setRestData(filterData);

        }
         
        fetchData();
    },[])
    console.log(id);
    console.log(RestData);

    return(

        <div>

            <div className="w-[80%] mx-auto mt-6 py-2">
                <Link to={`/city/delhi/${id}/search`}>
                <p className="w-full text-center py-2 bg-gray-200 text-xl font-semibold rounded-2xl">Search for Dishes</p>
                </Link>
            </div>

            <div className="w-[80%] mx-auto mt-2 py-4">
                <button className={`text-xl py-2 px-8 mr-2 border rounded-2xl ${selected==='veg'?"bg-green-600":"bg-gray-300"}`} onClick={()=>setSelected(selected==='veg'?null:'veg')}>Veg</button>
                <button className={`text-xl py-2 px-4 border rounded-2xl ${selected==='nonveg'?"bg-red-500":"bg-gray-300"}`} onClick={()=>setSelected(selected==='nonveg'?null:'nonveg')}>Non-Veg</button>
            </div>

        <div className="w-[80%] mx-auto mt-6">
            { RestData.map((menuItems)=><MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card } foodSelected={selected}/>) }
        </div>
        </div>
    )
}
export default RestaurantMenu;