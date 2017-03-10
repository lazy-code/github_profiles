import React, { Component, PropTypes } from 'react';
import Profile from './github/Profile';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: 'lazy-code',
      userData: {},
      userRepos: [],
      perPage: 5
    }
  };

  // Get user data from github
  getUserData(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+
            '?client_id='+this.props.clientId+
            '&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          userData: data
        });
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({
          userName: null
        });
      }.bind(this)
    });
  };

  // Get user repos from github
  getUserRepos(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+
            '/repos?per_page='+this.state.perPage+
            '&client_id='+this.props.clientId+
            '&client_secret='+this.props.clientSecret+
            '&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({
          userRepos: data
        });
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({
          userName: null
        });
      }.bind(this)
    });
  };

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  };

  render() {

    const { userData, userRepos } = this.state;

    return (
      <div>
        <Profile userData={userData} userRepos={userRepos} />
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