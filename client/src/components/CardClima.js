import React from "react";
import Util from '../util/Util';
import './CardClima.css'
import icon from '../img/icon.png';

class CardClima extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return    <div className="card_container">
     <h1>{this.props.clima.localidade} - {this.props.clima.estado}</h1>
      <h3>{Util.formatarData(new Date(this.props.clima.data))}</h3>
    <div className="short">
 <img src={icon} />
      <div className="temp">
        {Math.round(this.props.clima.temp_atual)}°C
    </div>
    </div>

    <div className="info">

      <p className="item_info">
        <label>  Umidade </label>
        {Math.round(this.props.clima.umidade)}%
      </p>
      <p className="item_info">
        <label>  Chuva </label>
         {Math.round(this.props.clima.chuva)}%
      </p>
      <p className="item_info">
        <label>   Vento </label>
        {Math.round(this.props.clima.vento * 1.609)} km/h - {this.props.clima.dir_vento}
      </p>
      <p className="item_info">
        <label>Temperatura</label>
        Max {Math.round(this.props.clima.temp_max)} °C Min {Math.round(this.props.clima.temp_min)}°C
      </p>
    </div>
    </div>

  }
}

export default CardClima;