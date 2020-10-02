import React from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Home, Header } from "./Page/Page";

const App = () => {
   return (
      <Router>
         <Switch>
            <Route exact path="/" component={Home} />
         </Switch>
      </Router>
   );
};

ReactDOM.render(
   <React.StrictMode></React.StrictMode>,
   document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
