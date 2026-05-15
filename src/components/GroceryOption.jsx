import { GroceryGridCards } from "../utils/Grocery"
import GroceryCard from "./GroceryCard";

function GroceryOption(){
    return(
        <div className="mt-20 w-[80%] container mx-auto">
            <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
            <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-5">
                {
                    GroceryGridCards.map((groceryData)=> <GroceryCard key={groceryData.id} groceryData={groceryData} />)
                }
            </div>
        </div>
    )
}

export default GroceryOption;