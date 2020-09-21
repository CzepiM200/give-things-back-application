import "./_mainPage.scss";
import React from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import Informations from "../Informations/Informations";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Organizations from "../Organizations/Organizations";
import LogIn from "../LogIn/LogIn";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const MainPage = () => {
  return (
    <section className="main-page">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Banner />
            <Informations />
            <About />
            <Organizations />
            <Contact />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/signup"></Route>
          <Route exact path="/signout"></Route>
        </Switch>
      </BrowserRouter>
    </section>
  );
};

export default MainPage;
