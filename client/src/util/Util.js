const Util = {
  formatarData: (data)=> {
    let diaDaSemana = [
      'Seg',
      'Ter',
      'Qua',
      'Qui',
      'Sex',
      'Sab',
      'Dom'];

    return `${diaDaSemana[data.getDay()]} , ${data.getDate() + 1 }`;
  }
}

export default Util;