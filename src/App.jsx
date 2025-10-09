import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx"
import Contact from "./pages/Contact/Contact.jsx"
import Categories from "./pages/Categories/Categories.jsx"
import Courses from "./pages/Courses/Courses.jsx"
import Faq from "./pages/FAQ/Faq.jsx"
import CourseDetails from "./pages/CourseDetails/CourseDetails.jsx";

import "./styles/cssVariables.css"
import "./styles/baseStyle.css";


export default function App() {
  return (
      <Routes>
        <Route element = {<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="courses" element={<Courses/>}/>
          <Route path="faq" element={<Faq/>}/>
          <Route path="devroute" element={<CourseDetails/>}/>
        </Route>
      </Routes>
  );
}
