import React from "react";
import ReactDOM from "react-dom";
import { Layout } from "antd";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Home, Manga, Novel, Knowledge, WebHeader } from "./Page/Page";
import "antd/dist/antd.css";

const App = () => {
   return (
      <Router>
         <Layout id="app">
            <WebHeader />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/manga" component={Manga} />
               <Route exact path="/novel" component={Novel} />
               <Route exact path="/knowledge" component={Knowledge} />
            </Switch>
         </Layout>
      </Router>
   );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
