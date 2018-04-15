import React, {Component} from 'react';

class Background extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };

  }


componentDidMount() {

  fetch('https://randomuser.me/api/?results=56')
  .then( results => {
    return results.json();
  })
  .then( data => {
    let pictures = data.results.map((pic) => {
      return(
        <div key={pic.results}>
          <img src={pic.picture.medium} alt={pic.name.first} className="users"/>
        </div>
      )
    })
    this.setState({pictures: pictures});
    console.log('state', this.state.pictures);
  });
}

render() {
  return (
    <div>
      <h2>Random User</h2>
      <div>
        {this.state.pictures}
      </div>
    </div>
  )
}
}

export default Background;
