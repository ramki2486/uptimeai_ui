/* eslint-disable react/prop-types */
const RepositoryCard = ({ title, language }) => {
  return (
    <>
      <div className="repository-card">
        <h4 className="title">{title}</h4>
        <div className="language">
          <i className="fas fa-circle"></i> <h5>{language}</h5>
        </div>
      </div>
    </>
  )
}

export default RepositoryCard
