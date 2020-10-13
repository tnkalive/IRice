import React from "react";
import { Layout, Image } from "antd";
import Logo from "../../styles/picture/pl.jpg";

const { Header } = Layout;

export const WebHeader = () => {
   return (
      <Header className="webheader">
         <div className="webheader-logo">
            <a id="logo">
               <img src={Logo} alt="logo" className="webheader-logo-img"></img>
            </a>
         </div>
      </Header>
   );
};
