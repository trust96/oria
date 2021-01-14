import react from "react";
import styles from "./Button.module.css";
import "../global/variables.module.css";
import "../global/global.module.css";

class SubmitButton extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  clickHandler = ()=> this.props.buttonEvent();
  render() {
    return (
      <input type="submit" value={this.props.buttonName}
      className={`${styles.button} ${this.props.fullwidth? styles.fullwidth: null}`} 
      onClick={this.clickHandler}
      >
      </input>
    );
  }
}


export default SubmitButton;
