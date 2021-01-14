import react from "react";
import Report from '../module/Report'
import styles from "./Adminpage.module.css";
import "../global/variables.module.css";
import "../global/global.module.css";
import Title from "../component/Title";

class Adminpage extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  clickHandler = ()=> this.props.buttonEvent();
  render() {
    return (
<div className={`${styles.admin}`}>
    <Title headings="1">Welcome back, Oriabure Augustine</Title>
    <Report></Report>
    <Report></Report>
    <Report></Report>
</div>
    );
  }
}


export default Adminpage;
