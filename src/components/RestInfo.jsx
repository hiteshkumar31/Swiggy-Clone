import { useState } from "react";
import {addItems, IncrementItems, DecrementItems} from "../Stored/CardSlicer";
import { useDispatch, useSelector } from "react-redux";


function RestInfo({restData}){

    const dispatch = useDispatch();
    const items = useSelector(state=>state.cartslice.items);

    const element = items.find(item=>item.id===restData.id);
    const count = element?element.quantity:0;


    function handleAddItems(){
        dispatch(addItems(restData));
    }

    function handleIncrementItems(){
        dispatch(IncrementItems(restData));
    }

    function handleDecrementItems(){
        dispatch(DecrementItems(restData));
    }



    return(
        <>
        <div className="flex w-full justify-between mb-2 pd-2">

            <div className="w-[70%]">
                <p className="text-xl text-gray-700 font-bold mb-2">{restData?.name}</p>
                <p className="font-bold">{"₹"+("defaultPrice" in restData?restData.defaultPrice/100:restData.price/100)}</p>
                <span className="text-green-700 font-semibold">{restData.ratings.aggregatedRating.rating}</span>
                <span>{"("+restData.ratings.aggregatedRating.ratingCountV2+")"}</span>
                <p>{restData?.description}</p>
            </div>

            <div className="w-[20%] relative h-42">
                <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData.imageId} alt="" />
                {
                (count===0)?(<button className="absolute bottom-1 left-20 shadow-md border border-white rounded-xl text-green-600 px-6 py-2 font-semibold bg-white" onClick={()=>handleAddItems()}>ADD</button>):(
                    <div className="absolute bottom-1 left-20 flex gap-2 text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white rounded-2xl">
                        <button onClick={()=>handleDecrementItems()}>-</button>
                        <span>{count}</span>
                        <button onClick={()=>handleIncrementItems()}>+</button>
                    </div>
                )
                } 
            </div>
        </div>
        <hr className="mb-6 mt-2"></hr>
        </>
    )
}

export default RestInfo;