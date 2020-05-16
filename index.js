import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import SideBar from "./sidebar";
import Header from "./header";
import Footer from "./footer";

function App() {
  return (
    <div id="App">
         <div class="header">
         
         <Header />
         </div>
         
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      
     
      <div class="footer">
             <Footer />
             </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);