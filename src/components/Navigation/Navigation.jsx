import { NavLink } from "react-router-dom"

export default function Navigation() {

    return (
        <nav>
                <NavLink to="/" style={({isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>Home</NavLink>
                <NavLink to="/about" style={({isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>About</NavLink>
                <NavLink to="/contact" style={({isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>Contact</NavLink>
                <NavLink to="/categories" style={({isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>Categories</NavLink>
                <NavLink to="/courses" style={({isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>Courses</NavLink>
                <NavLink to="/faq" style={({isActive}) => ({
                    fontWeight: isActive ? "bold" : "normal"
                })}>FAQ</NavLink>
            </nav>
    )
}