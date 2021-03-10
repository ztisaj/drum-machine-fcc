import React from 'react';

class PlaySound extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if(e.keyCode === this.props.letter.charCodeAt()){
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.message);
    }
  }

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.message);
  }

  render() {
    return (
      <div
          className = 'button-pad'
          id = {this.props.id}
          onClick = {this.handleClick}
      >
        {this.props.letter}
        <audio id={this.props.letter}
               src = {this.props.src}
               ref = {ref => this.audio = ref}
              ></audio>
            </div>
    )
  }
}

export default PlaySound;
