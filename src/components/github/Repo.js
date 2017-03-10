import React, {Component,PropTypes} from 'react';

class Repo extends Component {
  render() {

    const { repo } = this.props;

    return (
      <li className="list-group-item">
        <a href={repo.html_url} target="_blank">
          {repo.name}
        </a>: {repo.description}
      </li>
    );
  }
}

Repo.propTypes = {
  // From RepoList Component
  repo: PropTypes.object.isRequired
};

export default Repo;
