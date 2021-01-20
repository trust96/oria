import React, { Component } from "react";
import Button from "../components/Button";
import { writeReport } from "../firebase/database";
import styles from "./Report.module.scss";
import { signOut } from "../firebase/auth";
import { withRouter } from "react-router-dom";

export class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      report : null,
      reportSupport: false,
    };
  }
  handleChange = (e) => {
    const reportValue = e.target.value;
    this.setState({report: reportValue})
  }
  
  handleSubmit = (e)=>{
    e.preventDefault();
    const report = {
      report: this.state.report,
      date: new Date().toLocaleString()
    }
    writeReport(report);
    this.setState({reportSupport:true});
    e.target.reset()
  }
  snOut=()=>{
    signOut()
    this.props.history.push('/');

  }
  render() {
    return (
      <>
            <div 
            className={styles.button}
            onClick={this.snOut}>
            <Button primary>sign out</Button></div>

        <h1 className={`title title--primary`}>
          {" "}
          Welcome back,
        </h1>
        <form onSubmit={this.handleSubmit} action="">
          <div className={`${styles.content}`}>
            <label className={`${styles.label}`} htmlFor="report">
              Report
            </label>
            <textarea
              className={`${styles.textarea}`}
              type="report"
              id="report"
              onChange={this.handleChange}
            />
            <p className={`${this.state.reportSupport? styles.reportblock: styles.reportnone}`}> The report was sent successfully </p>
            <Button primary> Submit</Button>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(Report) ;
