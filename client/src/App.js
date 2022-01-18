import logo from './logo.svg';
import CardClima from './components/CardClima'

function App() {
  const clima = {
    cidade: 'Jauh',
    estado: 'Chuvoso',
    vento: 23,
    dir_vento: 'NE',
    chuva: 45,
    umidade: 12,
    temp_max: 34,
    temp_min: 23,
    temp_atual: 28

  };
  return (
    <CardClima clima={clima} />
  );
}

export default App;