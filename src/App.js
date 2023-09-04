// import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      <ButtonComponent button="ciao" />
      <ImageComponent
        src="https://www.adesso-online.de/sites/adesso.spotlight-verlag.de/files/styles/mode_content/public/2018-10/ciao_compleanno.jpg"
        alt="ciao"
      />
    </div>
  );
}

export default App;
