import Profile from '../Profile'
import DataContent from '../ProfileData'

const Account = () => {
  return (
    <div className="accounts-page">
      <div className="profile-content">
        <Profile />
      </div>
      <div className="data-content">
        <DataContent />
      </div>
    </div>
  )
}

export default Account
