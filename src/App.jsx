import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { writeReport } from "./firebase/database";
import Admin from "./modules/Admin";
import Form from "./modules/Form";
import Report from "./modules/Report";
import firebase from './firebase/firebase'

const db = firebase.firestore();
db.collection('Admin').get().then((stuff)=>{
  stuff.forEach(data => console.log(data.data()) )
})
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default App;
