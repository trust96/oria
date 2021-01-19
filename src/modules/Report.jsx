import React, { Component } from "react";
import Button from "../components/Button";
import { writeReport } from "../firebase/database";
import styles from "./Report.module.scss";
export class Report extends Component {
  constructor(props) {
    super(props);

    this.state = {
      report : null
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
    writeReport(report)
  }

  render() {
    return (
      <>
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
            <Button primary> Submit </Button>
          </div>
        </form>
      </>
    );
  }
}

export default Report;
