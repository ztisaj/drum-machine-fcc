import React from 'react';
import PlaySound from './PlaySound.js';
import Sounds from './Sounds.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: 'Click or Press a Key'
    }
  }

  handleDisplay = display => this.setState({display});

  render(){
    return(
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        <div id="buttons">
          <div className="drum-pad">{Sounds.map(x =>(
            <PlaySound
              key={x.id}
              id={x.id}
              letter={x.letter}
              src={x.src}
              message={x.message}
              handleDisplay={this.handleDisplay}
            />
          ))}
          </div>
        </div>
      </div>
    )
  }
}



export default App;
