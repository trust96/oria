import react from "react";
import styles from "./Button.module.css";
import "../global/variables.module.css";
import "../global/global.module.css";

class Button extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  clickHandler = ()=> this.props.buttonEvent();
  render() {
    return (
      <button 
      className={`${styles.button} ${this.props.tag? styles.tag: null} ${this.props.primary? styles.primary: null} ${this.props.fullwidth? styles.fullwidth: null}`} 
      onClick={this.clickHandler}
      >
        {this.props.children}
      </button>
    );
  }
}


export default Button;
