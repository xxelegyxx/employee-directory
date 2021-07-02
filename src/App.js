import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Import pages
import Home from "./pages/Home";
//import components
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <Router>
           <div>
               <Navbar />
               <Wrapper>
               <Route exact path= "/" component={Home} />
               </Wrapper>
           </div>

        </Router>
    )
}

export default App;