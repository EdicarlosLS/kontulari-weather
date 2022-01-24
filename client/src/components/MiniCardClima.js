import React from "react";
import Util from "../util/Util"
import './MiniCardClima.css';
import icon from '../img/icon.png';

class MiniCardClima extends React.Component {

  constructor(props) {
    super(props);
  }

  click() {
    this.props.onClick(this.props.id);
  }

  render() {
    return (<div className="mini_card" onClick={()=> { this.click(); }}>
        {Util.formatarData(new Date(this.props.clima.data))}
        <img src={icon} />
        {Math.round(this.props.clima.temp_max)}°C<br/>
        {Math.round(this.props.clima.temp_min)}°C
    </div>
    );
  }
}

export default MiniCardClima;