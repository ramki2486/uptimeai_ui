import PropTypes from 'prop-types'

const Profile = ({ data }) => {
  return (
    <div className="profile">
      <div className="pro-names">
        <img src={data?.avatar_url} alt="profile_img" className="profile-img" />
        <div>
          <h2 className="name">{data?.name}</h2>
          <h3 className="username">{data?.login}</h3>
        </div>
      </div>
      <button className="edit-button" type="button">
        Edit Profile
      </button>
      <div className="following-data">
        <i className="far fa-user"></i>
        <span>
          <b>{data?.followers}</b> follower
        </span>
        {' · '}
        <span>
          <b>{data?.following}</b> following
        </span>
        {' · '}
        <i className="far fa-star"></i>
        <b>3</b>
      </div>
      <hr />
      <div className="highlights">
        <h4 className="title">Highlights</h4>
        <h5>* Arctic Code Value Contributor</h5>
      </div>
      <hr />
      <div className="highlights">
        <h4 className="title">Organizations</h4>
      </div>
    </div>
  )
}

Profile.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Profile
