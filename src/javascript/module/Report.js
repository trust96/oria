import react from "react";
import Button from '../component/Button';
import Title from '../component/Title';
import styles from "./Report.module.css";
import button from "../component/Button.module.css";
import Paragraph from '../component/paragraph';
import "../global/variables.module.css";
import "../global/global.module.css";

class Report extends react.Component {

  constructor(props) {
    super(props);
    this.state = {
      button : styles.reportButton

    };
  }

  handler = ()=>{
    this.setState({button: })
  }
  render() {
    return (
      <div className={`${styles.report}`}>
<button 
onClick={handler}
className={`${this.state.button} ${button.button}`}>
<Title headings="3"subtitle nomargin>{this.props.date}</Title> 
<Button tag>delete</Button>
</button>
<div className={`${styles.reportText}`}>
<Paragraph> lorem bjdgeujfhbej efjef ef rfrvf rnfrkff rfrv rrfr jgr gr </Paragraph>
</div>
</div>


    );
  }
}

export default Report;
