import { NavLink } from "react-router-dom"

export default function Navigation({mini=false}) {

    return (
        <>
            {!mini ? 
                (<nav>
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
                </nav>):
                (<nav>
                    <NavLink to="/" style={({isActive}) => ({
                        fontWeight: isActive ? "bold" : "normal"
                    })}>Naslovnica</NavLink>
                    <NavLink to="/about" style={({isActive}) => ({
                        fontWeight: isActive ? "bold" : "normal"
                    })}>O nama</NavLink>
                    <NavLink to="/faq" style={({isActive}) => ({
                        fontWeight: isActive ? "bold" : "normal"
                    })}>F.A.Q.</NavLink>
                </nav>)
            }
        </>
    )
}