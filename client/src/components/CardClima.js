import React from "react";
import styled from "styled-components";

class CardClima extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clima: props.clima
    };
  }

  render() {
    return    <div className="card_container">
    <div id="short">
      <h1>{this.state.clima.cidade} - {this.state.clima.estado}</h1>
      <h3>Segunda - 17 jan</h3>
      <div id="icon">
        {this.state.clima.temp_atual}
    </div>
    </div>

    <div id="info">

      <p className="item-info">
        <label>  Umidade </label> <br />
        {this.state.clima.umidade}%
      </p>
      <p className="item-info">
        <label>  Chuva </label> <br />
         {this.state.clima.chuva}%
      </p>
      <p className="item-info">
        <label>   Vento </label> <br />
        {this.state.clima.vento}km - {this.state.clima.dir_vento}
      </p>
      <p className="item-info">
        <label>   Temperatura</label> <br />
        Max {this.state.clima.temp_max} - Min {this.state.clima.temp_min}
      </p>
    </div>
    </div>

  }
}

export default CardClima;