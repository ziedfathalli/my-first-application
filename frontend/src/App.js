import logo from './logo.svg';
import './App.css';

function App() {
  return (
  // eslint-disable-next-line react/jsx-filename-extension,react/react-in-jsx-scope
    <div className="App">
      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <header className="App-header">
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <p>
          Edit
          {' '}
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
