import React from "react";
import styled from "styled-components";

class CardClima extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return    <div className="card_container">
    <div id="short">
      <h1>{this.props.clima.localidade} - {this.props.clima.estado}</h1>
      <h3>Segunda - 17 jan</h3>
      <div id="icon">
        {this.props.clima.temp_atual}
    </div>
    </div>

    <div id="info">

      <p className="item-info">
        <label>  Umidade </label> <br />
        {this.props.clima.umidade}%
      </p>
      <p className="item-info">
        <label>  Chuva </label> <br />
         {this.props.clima.chuva}%
      </p>
      <p className="item-info">
        <label>   Vento </label> <br />
        {this.props.clima.vento}km - {this.props.clima.dir_vento}
      </p>
      <p className="item-info">
        <label>   Temperatura</label> <br />
        Max {this.props.clima.temp_max} - Min {this.props.clima.temp_min}
      </p>
    </div>
    </div>

  }
}

export default CardClima;