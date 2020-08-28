import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Menu from "./Pages/Menu/Menu";
import MenuDetail from "./Pages/Menu/MenuDetail/MenuDetail";
import Login from "./Pages/Login/Login";
import Agree from "./Pages/SignUp/Agree";
import Complete from "./Pages/SignUp/Complete";
import SignUp from "./Pages/SignUp/SignUp";
import MyPage from "./Pages/MyPage/MyPage";
// import Basket from "./Pages/Basket/Basket";
import Store from "./Pages/Store/Store";
import SearchResult from "./Pages/SearchResult/SearchResult";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/sign-up/join-agree" component={Agree} />
          <Route exact path="/sign-up/join-complete" component={Complete} />
          <Route exact path="/my-page" component={MyPage} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/menu/menu-detail/:id" component={MenuDetail} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/" component={Main} />
          {/* <Route exact path="/basket" component={Basket} /> */}
          <Route exact path="/:text" component={SearchResult} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
