import React from 'react';

class Background extends React.Component {
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
  });
}

render() {
  return (
    <div>
      <p>In this section I wanted to practice pulling from another API, Randomuser.me, it is a data set of fake users. I am only grabbing their photo to display and their first name as an image alt.</p>
      <h2>Random User</h2>
      <div>
        {this.state.pictures}
      </div>
    </div>
  )
}
}

export default Background;
