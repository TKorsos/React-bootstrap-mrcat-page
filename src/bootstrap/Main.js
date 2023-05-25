import React, { useContext } from "react";
import { ThemeContext, themes } from "./themes/Themes";
import Padding from "./main/Padding";
import Prologue from "./main/Prologue";
import Cards from "./main/Cards";
import ContentText from "./main/ContentText";
import FormMessage from "./main/FormMessage";
import TopButton from "./main/TopButton";

export default function Main(props) {

  const theme = useContext(ThemeContext);

    return <main className="container-lg py-5" style={ themes[theme] }>
    <Prologue />
    <Padding />
    <Cards />
    <Padding />
    <ContentText />
    <Padding />
    <FormMessage />
    <Padding />
    <TopButton />
  </main>
}