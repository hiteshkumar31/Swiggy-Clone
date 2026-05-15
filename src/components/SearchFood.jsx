import { useState, useEffect } from "react";
import { useParams } from "react-router";

function SearchFood(){
    const {id} = useParams();
    const [food, setFood] = useState("");
    const [RestData, setRestData] = useState([]);

    useEffect(()=>{
        async function fetchData(){

            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxyServer+swiggyAPI);
            const data = await response.json();
            console.log(data)
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((items)=> 'title' in items?.card?.card);
            setRestData(filterData);

        }

            fetchData();
            // RestData.filter((foodData)=>foodData.name)

    },[]);


        return(
            <div className="w-[80%] mx-auto mt-10">
                <input className="w-full pl-10 py-2 text-2xl bg-gray-200 rounded-2xl border" onChange={(e)=>setFood(e.target.value)} type="search" placeholder="Search here"/>
            </div>
        )
}

export default SearchFood;