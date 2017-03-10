import React, { Component, PropTypes } from 'react';
import Profile from './github/Profile';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: 'romabelka',
      userData: {},
      userRepos: [],
      perPage: 5
    }
  };

  // Get user data from github
  getUserData(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+'?client_id='+
            this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          userData: data
        });
        // console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({
          userName: null
        });
        // console.log(err);
      }.bind(this)
    });
  };

  componentDidMount() {
    this.getUserData();
  };

  render() {
    return (
      <div>
        <Profile userData={this.state.userData} />
      </div>
    );
  };
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
