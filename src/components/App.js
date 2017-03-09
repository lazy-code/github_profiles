import React, { Component, PropTypes } from 'react';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: 'lazy-code',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  };

  render() {
    return (
      <div>
        {this.state.userName}
      </div>
    );
  }
}

App.propTypes = {
  clientId: PropTypes.string,
  clientSecret: PropTypes.string
};

App.defaultProps = {
  clientId: '7d654af83bb87d52dde6',
  clientSecret: 'cfcde81879b35d85cacffce04dc3d10bcf6d4a1b'
};

export default App;
