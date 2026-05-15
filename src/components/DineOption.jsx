import {dineoutRestaurants} from '../utils/DineoutData';
import DineoutCard from './DineoutCard';

function DineOption(){
    return(
        <div className='w-[80%] mx-auto mt-20 mb-20'>
            <p className='text-2xl font-bold'>Discover best resturants on Dineout</p>
            <div className='flex flex-nowrap overflow-x-auto mt-5 gap-5'>
            {
                dineoutRestaurants.map((dineoutData)=><DineoutCard key={dineoutData?.info?.id} dineoutData={dineoutData}/>)
            }
            </div>
        </div>
    )
}

export default DineOption;