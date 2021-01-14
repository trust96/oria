import react from "react";
import styles from "./Type.module.css";
import "../global/variables.module.css";
import "../global/global.module.css";

class Title extends react.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
    headings = `h${this.props.headings}`
    render() {
      return (
          <this.headings 
          className={`${styles.title} ${this.props.subtitle? styles.subtitle:null} ${this.props.bold? styles.bold:null} ${this.props.nomargin? styles.nomargin:null}`}>
              {this.props.children}
          </this.headings>
      );
    }
  }
  
  
  export default Title;
  