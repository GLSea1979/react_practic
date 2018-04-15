import React from 'react';

const randomNumberBetween = (min, max) => {
  Math.floor(Math.random() * (max - min + 1)) + min;
}

class Number extends React.Component {
  handleClick = () => {
    if (this.props.clickable) {
      this.props.onClick(this.props.id);
    }
  };

  render() {
    return <div
      className="number">{this.props.value}</div>;
  }
}

class Game extends React.Component {
  challengeNumbers = Array.from({
    length: this.props.challengeSize,
  }).map(() => {
    randomNumberBetween(...this.props.challengeRange)
  });

  target = _.sum(
    _.sampleSize(this.challengeNumbers, this.props.answerSize)
  );

  render() {
    return (
      <div className="game">
        <div className="help">
          Pick {this.props.answerSize} numbers that add up to the target within {this.props.initialSeconds} seconds
        </div>
        <div className="target">{this.target}</div>
        <div className="challenge-numbers">
          {this.challengeNumbers.map((value, index) => {
              <Number key={index} value={value} />
            })
          }

        </div>
        <div className="footer">
          <div className="timer-value">{this.props.initialSeconds}</div>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Game
    challengeRange={[2,9]}
    challengeSize={6}
    answerSize={4}
    initialSeconds={15}
  />,
  mountNode
);

export default Game;
