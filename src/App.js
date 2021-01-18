import logo from './logo.svg';
import './App.css';
import React from 'react'


function Header(props){
  return(
    <header className='header'>
      <h1>{props.welcome}</h1>
    </header>
  )
}


class Odometer extends React.Component {
  constructor(){
    super()
    this.state = {
      fnum: 0,
    }
  }
  increament(add){
    let num = Number(this.state. fnum) + add;
    if (num > 9999) {
      this.setState({  fnum: "0000" });
      return;
    }
    if (num < 10) {
      this.setState({  fnum: "000" + num });
      return;
    }
    if (num < 100) {
      this.setState({  fnum: "00" + num });
      return;
    }
    if (num < 1000) {
      this.setState({  fnum: "0" + num });
      return;
    }
    this.setState({  fnum: num });
  }
  render() {
    return (
      <main>
        <div>
          <h2>Number of digits:</h2>
          <h3>{this.state.fnum}</h3>
       </div>
        <button className="button" onClick={() => this.increament(1)}>add 1</button>
        <button className="button" onClick={() => this.increament(10)}>add 10</button>
        <button className="button"  onClick={() => this.increament(100)}>add 100</button>
        <button className="button"  onClick={() => this.increament(1000)}>add 1000</button>
      </main>

 
       

    );
  }
}

function Footer(props){
  return(
    <footer>
      <p>{props.trademark}</p>
    </footer>
  )
}


function App() {
  return (
    <div className="App">
      <Header welcome = "Welcome to Odometer App" />
      <Odometer />
      <Footer trademark ="Copy Right @ 2021" />
    </div>
  );
}

export default App;




