import React from "react";
import Castello from "./Castello";
import Intro from "./Intro";
import IntroBody from "./IntroBody";
import NewSection from "./NewSection";
import Seafood from "./Seafood";

function App(){
   return (
    <>
        <Intro />
        <IntroBody/>
        <Seafood/>
        <Castello/>
        <NewSection/>
    </>
   )
};

export default App;