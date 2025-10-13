import { useState, useEffect } from "react";

import MobileNavigation from "../Navigation/MobileNavigation.jsx"
import Navigation from "../Navigation/Navigation.jsx"

export default function Header(){

    const [isMobile, setIsMobile] = useState(true);

    useEffect(function(){
        
        window.addEventListener("load", onResize)
        window.addEventListener("resize", onResize)

        return function(){ 
            window.removeEventListener("load", onResize)
            window.removeEventListener("resize",onResize)
        }
    },[]);

    function onResize() {
        if(document.getElementById("root").clientWidth < 992) setIsMobile(true);
        else setIsMobile(false);
    }

    return(
        <header>
            <h4>Online Škola</h4>
            {isMobile ? <MobileNavigation/>:<Navigation/>}
        </header>
    )
}