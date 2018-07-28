import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

import './App.css';
import registerServiceWorker from './registerServiceWorker';

let PLAYERS = [
    {
        name: "Jims Hoskins",
        score: 31,
        id: 1
    },
    {
        name: "Fernando Renteria",
        score: 22,
        id: 2
    },
    {
        name: "SumGuy",
        score: 44,
        id: 3
    }
];

function Header(props){
    return(
        <header className="header">
          <h1>{props.title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

function Counter(props){
    return(
        <div className="counter">
        <button className="counter-action decrement">-</button>
        <div className="counter-score">{props.score}</div>
        <button className="counter-action increment">+</button>
      </div>
    );
}

Counter.propTypes = {
    score: PropTypes.number.isRequired
}

function Player(props){
    return(
        <div className="player">
        <div className="player-name">
            {props.name}
        </div>
        <div className="player-score">
            <Counter score={props.score} />
        </div>
      </div>
    )
}

Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired
}

function App(props){
    return (
      <div className="scoreboard">
        <Header title={props.title} />
  
        <div className="players">
            {props.players.map(function(player){
                return <Player name={player.name} score={player.score} key={player.key}/>
            })}
        </div>
      </div>
    );
}

App.propTypes = {
    title: PropTypes.string,
    players: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired
    })).isRequired
}

App.defaultProps = {
    title: "Scoreboard"
}

ReactDOM.render(<App title="Scoreboard" players={PLAYERS}/>, document.getElementById('root'));
registerServiceWorker();
