import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/js/bootstrap';
import Navbar from './bootstrap/Navbar';
import Main from './bootstrap/Main';
import Footer from './bootstrap/Footer';
import { ThemeContext } from "./bootstrap/themes/Themes";

export default function App() {
  const [themeColor, setThemeColor] = useState("light");

  return <ThemeContext.Provider value={themeColor}>
    <Navbar themeColor={themeColor} setThemeColor={setThemeColor} />
    <Main />
    <Footer />
  </ThemeContext.Provider>
}