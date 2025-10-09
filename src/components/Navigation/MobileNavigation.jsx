import { useState } from "react";
import { NavLink } from "react-router-dom"

export default function MobileNavigation(){
    const [open, setOpen] = useState(false);

    return (<>
        <div className={open ? "menuIcon active" : "menuIcon"} onClick={() => setOpen(v => !v)}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav className={open ? "mobileMenu active" : "mobileMenu"}>
            <NavLink to="/" style={({isActive}) => ({
                fontWeight: isActive ? "bold" : "normal"
            })}>Naslovnica</NavLink>
            <NavLink to="/about" style={({isActive}) => ({
                fontWeight: isActive ? "bold" : "normal"
            })}>O nama</NavLink>
            <NavLink to="/contact" style={({isActive}) => ({
                fontWeight: isActive ? "bold" : "normal"
            })}>Kontakt</NavLink>
            <NavLink to="/categories" style={({isActive}) => ({
                fontWeight: isActive ? "bold" : "normal"
            })}>Kategorije</NavLink>
            <NavLink to="/courses" style={({isActive}) => ({
                fontWeight: isActive ? "bold" : "normal"
            })}>Tečajevi</NavLink>
            <NavLink to="/faq" style={({isActive}) => ({
                fontWeight: isActive ? "bold" : "normal"
            })}>F.A.Q.</NavLink>
        </nav>
    </>)
}