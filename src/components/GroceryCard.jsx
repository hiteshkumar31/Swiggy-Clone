import { GroceryGridCards } from "../utils/Grocery";


function GroceryCard({groceryData}){
    return(
        <div className="flex-none">
            <a href={groceryData?.action?.link}> 
             <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+groceryData?.imageId} alt="" />
            </a>
            <h2 className="text-center font-bold">{groceryData?.action?.text}</h2>
        </div>
    )
}

export default GroceryCard;