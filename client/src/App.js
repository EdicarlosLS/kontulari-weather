import React from 'react';
import logo from './logo.svg';
import api from './services/api';
import CardClima from './components/CardClima';
import MiniCardClima from './components/MiniCardClima';
import Pesquisa from './components/Pesquisa';
import localidades from './components/localidades';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clima: undefined,
      climaDaSemana: []
    }
  }

  criarClimaDaSemana(data) {
    let climaDaSemana = [];
    for (let i = 0; i < 6; i++) {
      let clima = this.criarClima(data.consolidated_weather[i]);
      clima.localidade = data.title;
      climaDaSemana.push(clima);
      if (i == 0) {
        this.setState({
          clima: clima
        });
      }
    }
    return climaDaSemana;
  }

  criarClima(data) {
    return {
      localidade: '',
      data: data.applicable_date,
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
        climaDaSemana: this.criarClimaDaSemana(response.data)
      })
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
  }

  renderMiniCardsClima(clima, idx) {
    return (<MiniCardClima clima={clima} id={idx} onClick={(idx)=> { this.setState({ clima: this.state.climaDaSemana[idx]})}} />
    );
  }

  render() {
    let clima = '';
    if (this.state.clima) {
      clima = <CardClima clima={this.state.clima} />
    }
    return (<div className="container">
    <Pesquisa
      lista={localidades}
      aoSelecionar={(item) => { this.aoSelecionar(item); } } />
    {clima}
    <div className="climaSemana" >
      {this.state.climaDaSemana.map((item, idx)=> {
        return this.renderMiniCardsClima(item, idx);
      })}
      </div>
    </div>

    );
  }
}
export default App;