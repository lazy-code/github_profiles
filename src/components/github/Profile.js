import React, { Component, PropTypes } from 'react';

class Profile extends Component {
  render() {

    const {
      name,
      login,
      avatar_url,
      public_repos,
      public_gists,
      followers,
      following,
      location,
      email,
      html_url
    } = this.props.userData;

    return (
      <div className="panel panel-default">

        <div className="panel-heading">
          <h3 className="panel-title">{name || login}</h3>
        </div>
        <div className="panel-body">
          <div className="row">

            <div className="col-md-4">
              <img src={avatar_url}
                   alt="avatar"
                   className="thumbnail"
                   style={{width:'100%'}}
              />
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-12">
                  <span className="label label-primary">{public_repos} Repos</span>
                  <span className="label label-success">{public_gists} Public Gists</span>
                  <span className="label label-info">{followers} Followers</span>
                  <span className="label label-danger">{following} Following</span>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col-md-12">
                  <ul className="list-group">
                    <li className="list-group-item"><b>Username: </b>{login}</li>
                    <li className="list-group-item"><b>Location: </b>{location}</li>
                    <li className="list-group-item"><b>Email Address: </b>{email}</li>
                  </ul>
                </div>
              </div>
              <br />

              <a className="btn btn-primary"
                 target="_blank"
                 href={html_url}
              >GitHub Profile</a>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  userData: PropTypes.object.isRequired
};
Profile.defaultProps = {};

export default Profile;
