import logoNavBar from './assets/logoNavBar.png';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className='Container'>
      <NavBar/>
      <h1 className="MainTitle">MAGNAS STORE</h1>
      <ItemListContainer greeting={'Diseños de Autor'}/>
    </div>
  );
}

export default App;
