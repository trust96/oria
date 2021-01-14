import react from "react";
import styles from "./Type.module.css";
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
<p className={`${styles.para}`}>
    {this.props.children}
</p>
    );
  }
}


export default Button;
