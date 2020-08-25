import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./Pages/Main/Main";
import Menu from "./Pages/Menu/Menu";
<<<<<<< HEAD
import MenuDetail from "./Pages/Menu/MeunDetail/MeunDetail";
import Login from "./Pages/Login/Login";
import Agree from "./Pages/SignUp/Agree";
import Complete from "./Pages/SignUp/Complete";
=======
import MenuDetail from "./Pages/Menu/MenuDetail/MenuDetail";
import Login from "./Pages/Login/Login";
>>>>>>> master
import SignUp from "./Pages/SignUp/SignUp";
import MyPage from "./Pages/MyPage/MyPage";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
<<<<<<< HEAD
          <Route exact path="/sign-up/join-agree" component={Agree} />
          <Route exact path="/sign-up/join-complete" component={Complete} />
          <Route exact path="/my-page" component={MyPage} />
          <Route exact path="/" component={Main} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu/menu-Detail" component={MenuDetail} />
=======
          <Route exact path="/my-page" component={MyPage} />
          <Route exact path="/" component={Main} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu/menu-detail" component={MenuDetail} />
>>>>>>> master
        </Switch>
      </Router>
    );
  }
}

export default Routes;
