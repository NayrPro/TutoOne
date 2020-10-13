import React from 'react'
import './App.css'
import Footer from './Footer.js';
import Main from "./Main.js"
import Class1 from "./Class1"
import PokeApi from './PokeAPI';
import UseState1 from './UseState1'
import FormulaireV6 from './Components/FormulaireV6'
import { theme, ThemeProvider } from "@chakra-ui/core";
import ChakraInput from './Components/ChakraInput'
function App() {

  const contenu = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde id corrupti, aliquid molestiae dolores debitis quae impedit maxime repellat quos incidunt error tempore delectus nihil soluta nam voluptatem in rerum";
  const features = { 
    color: "grey", 
    backgroundColor: "#9de0af"}
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        {/* <UseState1/> */}
        <FormulaireV6/>
        <PokeApi/>
        <Class1 name="OA"/>
        <Main></Main>
        <Footer content={contenu}
                features={features}>
        </Footer>
    </div>
    </ThemeProvider>
    
  );
}

export default App;
