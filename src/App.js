
import './App.css';
import LottoGame from './components/lootoGame/lottoGame';


function App() {
  return (
    <div className="App">
      <LottoGame maxNum={50} maxBalls={6} title="Bingo" />
    </div>
  );
}

export default App;
