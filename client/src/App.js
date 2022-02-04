import React from 'react';
import logo from './logo.svg';
import api from './services/api';
import CardClima from './components/CardClima';
import MiniCardClima from './components/MiniCardClima';
import Pesquisa from './components/Pesquisa';
import localidades from './components/localidades';
import Load from './components/Load'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.estado = {
      INICIAL: "inicial",
      CARREGANDO: "carregando",
      PRONTO: "pronto"
    };
    this.state = {
      clima: undefined,
      climaDaSemana: [],
      estado: this.estado.INICIAL
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
    this.setState({
      estado: this.estado.CARREGANDO
    });
    api.get('/?location='+item)
    .then((response) => {
      this.setState({
        climaDaSemana: this.criarClimaDaSemana(response.data)
      });
      this.setState({
        estado: this.estado.PRONTO
      });
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
    let climaSemana = ''
    if (this.state.estado == this.estado.PRONTO) {
      clima = <CardClima clima={this.state.clima} />;
      climaSemana = <div className="climaSemana">
      {this.state.climaDaSemana.map((item, idx)=> {
        return this.renderMiniCardsClima(item, idx);
      })}
      </div>;
    } else if (this.state.estado == this.estado.CARREGANDO) {
      clima = <Load />
    }
    return (<div className="container">
    <Pesquisa
      lista={localidades}
      aoSelecionar={(item) => { this.aoSelecionar(item); } } />
    {clima}
    {climaSemana}
    </div>

    );
  }
}
export default App;