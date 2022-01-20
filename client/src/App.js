import React from 'react';
import logo from './logo.svg';
import api from './services/api';
import CardClima from './components/CardClima';
import Pesquisa from './components/Pesquisa';
import localidades from './components/localidades';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clima: undefined
    }
  }

  criarClima(data) {
    return {
      localidade: 'Jauh',
      estado: data.weather_state_name,
      vento: data.wind_speed,
      dir_vento: data.wind_direction_compass,
      chuva: data.predictability,
      umidade: data.humidity,
      temp_max: data.max_temp,
      temp_min: data.min_temp,
      temp_atual: data.the_temp
    };
  }

  aoSelecionar(item) {
    api.get('/?location='+item)
    .then((response) => {
      this.setState({
        clima: this.criarClima(response.data.consolidated_weather[0])});
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  render() {
    let clima = <h1>nada</h1>;
    if (this.state.clima) {
      clima = <CardClima clima={this.state.clima} />
    }
    return (<div>
      {clima}
    <Pesquisa
      lista={localidades}
      aoSelecionar={(item) => { this.aoSelecionar(item); } } />
    </div>
    );
  }
}
export default App;