import React, {Component, PropTypes} from 'react';

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    const username = this.state.username;
    if (username.length < 2) {
      alert('Please enter a username');
      return false;
    }
    this.props.handleSubmit(username);
    this.setState({
      username: ''
    });
  };

  handleChange(e) {
    this.setState({
      username: e.target.value.trim()
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Search Github Users</label>
          <input type="text"
                 name="username"
                 className="form-control"
                 value={this.state.username}
                 onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

Search.propTypes = {
  // From App Component
  handleSubmit: PropTypes.func.isRequired
};

export default Search;
