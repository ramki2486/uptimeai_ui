import { useEffect, useState } from 'react'

import Profile from '../Profile'
import DataContent from '../ProfileData'

const getUser = username => {
  return fetch(`https://api.github.com/users/${username}`).then(response =>
    response.json()
  )
}

const Account = () => {
  const [profileData, setProfileData] = useState({})
  const [repos, setRepos] = useState([])
  const searchParams = new URLSearchParams(window.location.search)

  useEffect(() => {
    if (searchParams.get('username')) {
      getUser(searchParams.get('username')).then(response => {
        setProfileData(response)
        fetch(`${response?.repos_url}`)
          .then(repo => repo.json())
          .then(repo_data => {
            const sortRespos =
              repo_data.length > 0 &&
              repo_data.sort(
                (a, b) => b?.open_issues_count - a?.open_issues_count
              )
            setRepos(sortRespos)
          })
      })
    }
  }, [])

  return (
    <div className="accounts-page">
      {!searchParams.get('username') && (
        <div style={{ textAlign: 'center' }}>
          Get user info with query param ?username="some"
        </div>
      )}
      {searchParams.get('username') && (
        <>
          <div className="profile-content">
            <Profile data={profileData} />
          </div>
          <div className="data-content">
            <DataContent repos={repos} />
          </div>
        </>
      )}
    </div>
  )
}

export default Account
