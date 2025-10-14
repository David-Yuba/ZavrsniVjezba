import { Outlet } from "react-router-dom"
import Header from "./components/Header/Header.jsx"
import Footer from "./components/Footer/Footer.jsx"

import "./styles/reset.css"
import './styles/index.css'
import "./styles/layout.css"
import "./styles/desktopLayout.css"

export default function Layout() {

    return (
        <>
            <div className="header-div">
                <Header></Header>
            </div>
            <div>
                <Outlet/>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </>
    )
}