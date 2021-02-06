import ProfileImg from '../../assests/pro-img.jpeg'

const Profile = () => {
  return (
    <div className="profile">
      <img src={ProfileImg} alt="profile_img" className="profile-img" />
      <h2 className="name">RAMA KISHORE CHIRATLA</h2>
      <h3 className="username">ramki2486</h3>
      <button className="edit-button" type="button">
        Edit Profile
      </button>
      <div className="following-data">
        <i className="far fa-user"></i>
        <span>
          <b>1</b> follower
        </span>
        {' · '}
        <span>
          <b>0</b> follower
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

export default Profile
