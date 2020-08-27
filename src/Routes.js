import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./Pages/Main/Main";
import Menu from "./Pages/Menu/Menu";
import MenuDetail from "./Pages/Menu/MenuDetail/MenuDetail";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import MyPage from "./Pages/MyPage/MyPage";
import Basket from "./Pages/Basket/Basket";
import Basket2 from "./Pages/Basket/Basket2";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/my-page" component={MyPage} />
          <Route exact path="/" component={Main} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu/menu-detail" component={MenuDetail} />
          <Route exact path="/basket" component={Basket} />
          <Route exact path="/basket2" component={Basket2} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
