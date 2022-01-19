import React from "react";

class Pesquisa extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lista: props.lista,
      busca: '',
      aoSelecionar: props.aoSelecionar
    };
  }

  muda(e) {
    this.setState({
      busca: e.target.value
    });
  }

  filtro(item) {
    if (this.state.busca == '') {
      return false;
    } else {
      return item.toLowerCase().includes(this.state.busca.toLowerCase());
    }
  }

  renderItem(item) {
    return <li onClick={() => { this.state.aoSelecionar(item); }}>{item}</li>;
  }

  render() {
    return (
      <div>
      <input type="text"
        onChange={(e) => { this.muda(e); }}
        />
        <ul>
          {this.state.lista
          .filter((item)=> {
            return this.filtro(item);
          })
          .map((item)=> {
            return this.renderItem(item);
          })}
        </ul>
      </div>
    );
  }
}

export default Pesquisa;