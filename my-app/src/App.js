import logo from './cat.jpg';
import './App.css';
import Button from '@mui/material/Button';
function App() {
  return (
    <div className="App">
      <header className="App-header">
    
        <p>
          All the facts you need about animals
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://factanimal.com/animal-facts/"
          target="_blank"
          rel="noopener noreferrer"

          
        >
          Additonal facts
        </a> 
        <a
          className="App-link"
          href="https://www.thoughtco.com/top-facts-about-animals-129454"
          target="_blank"
          rel="noopener noreferrer"

          
        >
          Animal Facts
        </a> 

        
        

      </header>
    </div>
  );
}

export default App;
