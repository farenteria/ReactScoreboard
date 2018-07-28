import React, { Component } from 'react';
import './App.css';

// class App extends Component (){
//   constructor(props){
//     super(props);
//     this.state = {
//       name: "Scoreboard"
//     }
//   }
//   render() {
//     return (
//       <div className="scoreboard">
//         <header className="header">
//           {/* <h1>Scoreboard</h1> */}
//           <h1>{this.state.name}</h1>
//         </header>

//         <div className="players">
//           <div className="player">
//             <div className="player-name">
//               Jim Hoskins
//             </div>
//             <div className="player-score">
//               <div className="counter">
//                 <button className="counter-action decrement">-</button>
//                 <div className="counter-score">31</div>
//                 <button className="counter-action increment">+</button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="players">
//           <div className="player">
//             <div className="player-name">
//               Jim Hoskins
//             </div>
//             <div className="player-score">
//               <div className="counter">
//                 <button className="counter-action decrement">-</button>
//                 <div className="counter-score">31</div>
//                 <button className="counter-action increment">+</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

function App(props){
  return (
    <div className="scoreboard">
      <header className="header">
        <h1>{this.props.name}</h1>
      </header>

      <div className="players">
        <div className="player">
          <div className="player-name">
            Jim Hoskins
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <div className="counter-score">31</div>
              <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>
      </div>

      <div className="players">
        <div className="player">
          <div className="player-name">
            Jim Hoskins
          </div>
          <div className="player-score">
            <div className="counter">
              <button className="counter-action decrement">-</button>
              <div className="counter-score">31</div>
              <button className="counter-action increment">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
