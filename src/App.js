import React, {Component} from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import { Card } from './components'; 
class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      toggleLogo: true,
      cards : [ 
        {id: 0},
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
      ]
    }
  }

  toggleLogo = () => {
    this.setState(prevState => ({
      toggleLogo: !prevState.toggleLogo
    }));
  }

  getCards = () => {
    return this.state.cards.map((card) => {
      return <Card duration={150} key={card.id}/>
  })
  }
  render(){
    return(
      <div className="App"> 
        <header className="App-header">
          <img src={logo} 
          className={this.state.toggleLogo ? 'static-logo' : 'static-logo animate jello'} 
          alt="logo"
          onMouseEnter={this.toggleLogo}
          onMouseLeave={this.toggleLogo}/>
          <h1 className="App-title">Welcome to Moran's Collection </h1>
        </header>
        <div className="Grid">
          {
              this.getCards()
          }
        </div>
      </div>
    );
  }
}

export default App;
