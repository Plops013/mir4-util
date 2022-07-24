import './App.css';
import Header from './components/Header';
import MainRouter from './router/MainRouter';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div class="content">
        <MainRouter/>
      </div>
    </div>
  );
}

export default App;
