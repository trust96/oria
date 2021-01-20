import React, { Component } from "react";
import Button from "../components/Button";
import styles from "./Form.module.scss";
import Input from "../components/Input";
import { ContextConsumer } from "../global/context";
import { signIn } from "../firebase/auth";
import { withRouter } from 'react-router-dom'
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email:null,
      password: null
    };
  }
  getEmail=(value)=>{
    this.setState({email:value})
  }
  getPassword=(value)=>{
    this.setState({password:value})
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    signIn(this.state.email, this.state.password)
    e.target.reset();
    if (this.state.email === 'ekohaugustine@yahoo.com'){
          this.props.history.push('/admin');

    } else
    {
      this.props.history.push('/report')
    }
  }
  render() {
    return (
      <>
      <ContextConsumer>
        {
          value => <div>{value}</div>
        }
      </ContextConsumer>
      <h1 className={`title title--primary`}> Welcome to oriabure farms limited </h1>
      <div className="">
      <p className="subtitle"> please <strong>sign in</strong> and submit your report</p>

        <div className={`${styles.container}`}>
          <form className={`${styles.content}`} onSubmit={this.handleSubmit} action="">
            <Input callback={this.getEmail} login type="email"> Username</Input>
            <Input callback={this.getPassword} login type="password"> Password</Input>
            <Button primary fullwidth type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
      </>
    );
  }
}

export default withRouter(Form);