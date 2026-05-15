import RestInfo from "./RestInfo";
import { useState } from "react";

function MenuCard({menuItems, foodSelected}){
    const [isOpen, setIsOpen] = useState(true);

    if(!isOpen){
        return(
            <div className="w-full">
                <div className="flex justify-between w-full">
                <p className="text-2xl font-bold">{menuItems.title}</p>
                <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄ ':'˅'}</button>
                </div>
                <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
            </div>
        )
    }

    if("categories" in menuItems){
        return(
            <div className="w-full">
                <div>
                    {
                        menuItems.categories.map((items)=><MenuCard key={items.title} menuItems={items} foodSelected={foodSelected}/>)
                    }
                </div>
            </div>
        )
    }

    // Veg Condition
    if(foodSelected==='veg'){
        return(

        <div>
            <div className="flex justify-between w-full">
                <p className="text-2xl font-bold">{menuItems.title}</p>
                <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄ ':'˅'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=>'isVeg' in food?.card?.info).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>

        )
    }

    // Non veg Condition
    if(foodSelected==='nonveg'){
        return(

        <div>
            <div className="flex justify-between w-full">
                <p className="text-2xl font-bold">{menuItems.title}</p>
                <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄ ':'˅'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.filter((food)=> !('isVeg' in food?.card?.info)).map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>

        )
    }



    return(

        <div>
            <div className="flex justify-between w-full">
                <p className="text-2xl font-bold">{menuItems.title}</p>
                <button className="text-3xl mr-10" onClick={()=>setIsOpen(!isOpen)}>{isOpen?'˄ ':'˅'}</button>
            </div>
            <div>
                {
                    menuItems?.itemCards?.map((items)=><RestInfo key={items?.card?.info?.id} restData={items?.card?.info} />)
                }
            </div>
            <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>

    )
}

export default MenuCard;