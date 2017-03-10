import React, {Component, PropTypes} from 'react';
import Repo from './Repo';

class RepoList extends Component {
  render() {
    return (
      <ul className="list-group">
        {
          this.props.userRepos.map(repo => {
                        return <Repo repo={repo}
                                     key={repo.id}
                                     {...this.props} />
                          })
        }
      </ul>
    );
  }
}

RepoList.propTypes = {
  // From Profile Component
  userRepos: PropTypes.array.isRequired
};

export default RepoList;
