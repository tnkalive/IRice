import React from "react";
import {  Layout, Row, Col, Card } from "antd";
import { HomeCard } from "../Home/component/componentHome";
import Manga from '../../styles/picture/manga.jpg'
import Knowledge from '../../styles/picture/knowledge.jpg'
import Novel from '../../styles/picture/ani.jpg'

const { Content } = Layout;

export const Home = () => {
   return (
      <Content className="home">
         <div className="home-card">
            <Row gutter={[16, 24]}>
               <Col xs={24} xl={8}>
                  <div className="home-card-catagory-cover">
                     {/* <img src={Manga}/> */}
                     <Card cover={<img src={Manga}/>}>
                        Manga
                     </Card>
                  </div>
               </Col>
               <Col xs={24} xl={8}>
                  <div className="home-card-catagory-cover">
                     {/* <img src={Novel}> */}
                     <Card cover={<img src={Novel}/>}>
                        Novel
                     </Card>
                  </div>
               </Col>
               <Col xs={24} xl={8}>
                  <div className="home-card-catagory-cover">
                     {/* <img src={Knowledge}/> */}
                     <Card cover={<img src={Knowledge}/>}>
                        Knowledge
                     </Card>
                  </div>
               </Col>
            </Row>
         </div>
      </Content>
   );
};
