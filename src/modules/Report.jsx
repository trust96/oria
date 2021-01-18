import React, { Component } from "react";
import Button from "../components/Button";
import styles from "./Report.module.scss";
export class Report extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'happy'
        }
    }
    
  render() {
    return (
      <>
        <h1 className={`title title--primary`}>
          {" "}
          Welcome back, {this.state.username}
        </h1>
<form action="">
        <div class={`${styles.content}`}>
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
