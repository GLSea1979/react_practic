import React from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'atomic';


const withFetching = (url) => (Comp) =>
  class withFetching extends React.Component {
    constructor(props) {
      super(props);

      this.state ={
        data: {},
        isLoading: false,
        error: null,
      };
    }


    componentDidMount() {
      this.setState({ isLoading: true });

      fetch(url)
        .then(response => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error('Oh, Snap response is not right.');
          }
        })
        .then(data => this.setState({ data, isLoading: false}))
        .catch(error => this.setState({ error, isLoading: false}));
    }

    render() {
      return <Comp { ...this.props } { ...this.state} />
    }
  }


const App = ({ data, isLoading, error }) => {
  const hits = data.hits || [];

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <div>
        <p>This section is pulling data from Hacker News. I built it following an article by Robin Wieruch. It is currently pulling all the articles that match the query of Atomic. </p>
        <h2>Hacker News</h2>
        <div>
          {hits.map(hit =>
            <div key={hit.objectID}>
              <a href={hit.url}>{hit.title}: {hit.author}</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default withFetching(API + DEFAULT_QUERY)(App);
