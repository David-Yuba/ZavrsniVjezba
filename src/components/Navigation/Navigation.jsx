import { NavLink } from "react-router-dom"

import "./navigation.css"

export default function Navigation({mini=false}) {

    return (
        <>
            {!mini ? 
                (<nav>
                    <NavLink to="/" style={({isActive}) => (isActive )?{
                        fontWeight: "bold", backgroundColor: "#e5e7eb35"
                        }:{ fontWeight: "normal" }
                    }>Naslovnica</NavLink>
                    <NavLink to="/about" style={({isActive}) => (isActive )?{
                        fontWeight: "bold", backgroundColor: "#e5e7eb35"
                        }:{ fontWeight: "normal" }
                    }>O nama</NavLink>
                    <NavLink to="/contact" style={({isActive}) => (isActive )?{
                        fontWeight: "bold", backgroundColor: "#e5e7eb35"
                        }:{ fontWeight: "normal" }
                    }>Kontakt</NavLink>
                    <NavLink to="/categories" style={({isActive}) => (isActive )?{
                        fontWeight: "bold", backgroundColor: "#e5e7eb35"
                        }:{ fontWeight: "normal" }
                    }>Kategorije</NavLink>
                    <NavLink to="/courses" style={({isActive}) => (isActive )?{
                        fontWeight: "bold", backgroundColor: "#e5e7eb35"
                        }:{ fontWeight: "normal" }
                    }>Tečajevi</NavLink>
                    <NavLink to="/faq" style={({isActive}) => (isActive )?{
                        fontWeight: "bold", backgroundColor: "#e5e7eb35"
                        }:{ fontWeight: "normal" }
                    }>F.A.Q.</NavLink>
                </nav>):
                (<nav>
                    <NavLink to="/" style={({isActive}) => (isActive )?{
                        fontWeight: "bold"
                        }:{ fontWeight: "normal" }
                    }>Naslovnica</NavLink>
                    <NavLink to="/about" style={({isActive}) => (isActive )?{
                        fontWeight: "bold"
                        }:{ fontWeight: "normal" }
                    }>O nama</NavLink>
                    <NavLink to="/faq" style={({isActive}) => (isActive )?{
                        fontWeight: "bold"
                        }:{ fontWeight: "normal" }
                    }>F.A.Q.</NavLink>
                </nav>)
            }
        </>
    )
}