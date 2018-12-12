import * as React from 'react';
import Home from "./routes/Home";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
