import CalendarHeatmap from 'react-calendar-heatmap'

import RepositoryCard from './RepositoryCard'
import 'react-calendar-heatmap/dist/styles.css'

const today = new Date()

function shiftDate(date, numDays) {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + numDays)
  return newDate
}

const DataContent = () => {
  return (
    <div className="profile-data">
      <div className="links">
        <a href="#">
          <i className="fas fa-book-open"></i> Overview
        </a>
        <a href="#">
          <i className="far fa-folder-open"></i> Repositories
        </a>
        <a href="#">
          <i className="fas fa-tasks"></i> Projects
        </a>
        <a href="#">
          <i className="fas fa-box-open"></i> Packages
        </a>
      </div>
      <div className="heading">
        <h4 className="head-title">Popular Repositories</h4>
        <h4 className="custom">Customize your pins</h4>
      </div>
      <div className="repositories">
        <RepositoryCard />
      </div>
      <div className="heading">
        <h4 className="head-title">5 contributions in the last year</h4>
        <h4 className="custom">Contribution settings</h4>
      </div>
      <div className="heatmap">
        <CalendarHeatmap
          startDate={shiftDate(today, -300)}
          endDate={today}
          values={[
            { date: '2020-05-20', count: 12 },
            { date: '2020-06-22', count: 122 },
            { date: '2021-01-15', count: 38 },
          ]}
          gutterSize={5}
          showWeekdayLabels
        />
      </div>
      <div className="contribution">
        <div className="activity">
          <h4>Contribution Activity</h4>
          {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
          <h4 className="month-date" />
          <span>February 2021</span>
          <div className="respository-dates">
            <h4>Created 1 respository</h4>
          </div>
        </div>
        <div className="years">
          <h5>2021</h5>
          <h5>2020</h5>
          <h5>2019</h5>
          <h5>2018</h5>
        </div>
      </div>
    </div>
  )
}

export default DataContent
