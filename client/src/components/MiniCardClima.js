import React from "react";
import Util from "../util/Util"

class MiniCardClima extends React.Component {

  constructor(props) {
    super(props);
  }

  click() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (<div onClick={()=> { this.click(); }}>
        {Util.formatarData(new Date(this.props.clima.data))} <br />
        {Math.round(this.props.clima.temp_max)} °C<br />
        {Math.round(this.props.clima.temp_min)} °C
    </div>
    );
  }
}

export default MiniCardClima;