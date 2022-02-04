import React from 'react';
import './Load.css';

class Load extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div>
    <p>
 Carregando
      <span className="pontoUm">.</span>
      <span className="pontoDois">.</span>
      <span className="pontoTres">.</span>
    </p>
    </div>
  }
}

export default Load;