import React, { Component } from "react";
import styles from './App.module.scss'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Button from "./components/Button";
import { writeReport } from "./firebase/database";
import { ContextProvider } from "./global/context";
import Admin from "./modules/Admin";
import Form from "./modules/Form";
import Report from "./modules/Report";
import firebase from './firebase/firebase'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  render() {
    return (
      <>

      <BrowserRouter>
      <ContextProvider value='1'>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/report">
            <Report />
          </Route>
        </Switch>
        </ContextProvider>
      </BrowserRouter>
      </>
    );
  }
}

export default App;
