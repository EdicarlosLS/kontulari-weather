import React from "react";
import styled from "styled-components";
import Util from '../util/Util';

class CardClima extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return    <div className="card_container">
    <div id="short">
      <h1>{this.props.clima.localidade} - {this.props.clima.estado}</h1>
      <h3>{Util.formatarData(new Date(this.props.clima.data))}</h3>
      <div id="icon">
        {Math.round(this.props.clima.temp_atual)} °C
    </div>
    </div>

    <div id="info">

      <p className="item-info">
        <label>  Umidade </label> <br />
        {Math.round(this.props.clima.umidade)}%
      </p>
      <p className="item-info">
        <label>  Chuva </label> <br />
         {Math.round(this.props.clima.chuva)}%
      </p>
      <p className="item-info">
        <label>   Vento </label> <br />
        {Math.round(this.props.clima.vento * 1.609)} km/h - {this.props.clima.dir_vento}
      </p>
      <p className="item-info">
        <label>   Temperatura</label> <br />
        Max {Math.round(this.props.clima.temp_max)} °C - Min {Math.round(this.props.clima.temp_min)} °C
      </p>
    </div>
    </div>

  }
}

export default CardClima;