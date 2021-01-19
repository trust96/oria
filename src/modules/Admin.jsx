import React, { Component } from "react";
import Accordion from "../components/Accordion";
import styles from "./Admin.module.scss";
import firebase from "../firebase/firebase";
import Button from "../components/Button";
import { signOut } from "../firebase/auth";
const db = firebase.firestore();
const collection = db.collection("Admin");

export class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      report: [],
    };
  }
  componentDidMount() {
    collection
      .orderBy("date", "desc")
      .get()
      .then((stuff) =>
        stuff.forEach((doc) =>
          this.setState((prevstate) => {
            return {
              report: [
                ...prevstate.report,
                {
                  date: doc.data().date,
                  report: doc.data().report,
                  id: doc.id,
                },
              ],
            };
          })
        )
      );
  }
  snOut=()=>{
    signOut()
  }
  render() {
    let displayAccordion = this.state.report.map((data) => {
      return (
        <Accordion key={data.id} date={data.date}>
          {" "}
          {data.report}
        </Accordion>
      );
    });
    return (
      <>
        <div 
        className={styles.button}
        onClick={this.snOut}>
          <Button primary>sign out</Button>
        </div>

        <div className={`${styles.container}`}>
          <h1 className={`title title--primary`}>
            {" "}
            Welcome back, Oriabure Augustine
          </h1>
          {displayAccordion}
        </div>
      </>
    );
  }
}

export default Admin;
