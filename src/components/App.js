import React, { Component, PropTypes } from 'react';
import Profile from './github/Profile';
import Search from './github/Search';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: 'lazy-code',
      userData: {},
      userRepos: [],
      perPage: 5
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  };

  // Get user data from github
  getUserData(){
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+
            '?client_id='+this.props.clientId+
            '&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({
          userData: data
        });
      },
      error: (xhr, status, err) => {
        alert('User not found');
        this.setState({
          userName: null
        });
      }
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
      success: (data) => {
        this.setState({
          userRepos: data
        });
      },
      error: (xhr, status, err) => {
        this.setState({
          userName: null
        });
      }
    });
  };

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  };

  handleSubmit(username){
    this.setState({userName: username}, function(){
      this.getUserData();
      this.getUserRepos();
    });
  }

  render() {

    const { userData, userRepos } = this.state;

    return (
      <div>
        <Search handleSubmit={this.handleSubmit}/>
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