import RestHeader from "./RestHeader";
import { Outlet } from "react-router";

function SecondaryHome(){
    return(
        <>
            <RestHeader/>
            <Outlet/>
        </>
    )
}

export default SecondaryHome;