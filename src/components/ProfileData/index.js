import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import CalendarHeatmap from 'react-calendar-heatmap'

import RepositoryCard from './RepositoryCard'
import 'react-calendar-heatmap/dist/styles.css'

const today = new Date()

function shiftDate(date, numDays) {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + numDays)
  return newDate
}

const DataContent = ({ repos }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [tab, setTab] = useState('overview')
  const latestHeatMapDates =
    repos.length > 0
      ? repos.filter(ele => shiftDate(today, -300) < new Date(ele.updated_at))
      : []

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 700)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="profile-data">
      <div className="links">
        <a
          href="#overview"
          className={`${tab === 'overview' ? 'active' : ''}`}
          onClick={() => setTab('overview')}
        >
          <i className="fas fa-book-open"></i> Overview
        </a>
        <a
          href="#respositories"
          className={`${tab === 'respositories' ? 'active' : ''}`}
          onClick={() => setTab('respositories')}
        >
          <i className="far fa-folder-open"></i> Repositories
        </a>
        <a
          href="#projects"
          className={`${tab === 'projects' ? 'active' : ''}`}
          onClick={() => setTab('projects')}
        >
          <i className="fas fa-tasks"></i> Projects
        </a>
        <a
          href="#packages"
          className={`${tab === 'packages' ? 'active' : ''}`}
          onClick={() => setTab('packages')}
        >
          <i className="fas fa-box-open"></i> Packages
        </a>
      </div>
      {tab !== 'overview' && <div className="empty">Hey, {tab}</div>}
      {repos && repos.length === 0 && tab === 'overview' && (
        <div className="empty">No Statistics</div>
      )}
      {repos && repos.length > 0 && tab === 'overview' && (
        <>
          <div className="heading">
            <h4 className="head-title">Popular Repositories</h4>
            <h4 className="custom">Customize your pins</h4>
          </div>
          <div className="repositories">
            {repos?.length > 0 &&
              repos
                .slice(0, 6)
                .map(ele => (
                  <RepositoryCard
                    key={ele.id}
                    title={ele?.name}
                    language={ele?.language}
                  />
                ))}
          </div>
          <div className="heading">
            <h4 className="head-title">
              {latestHeatMapDates.length} contributions in the last year
            </h4>
            <h4 className="custom">Contribution settings</h4>
          </div>
          <div className="heatmap">
            <CalendarHeatmap
              startDate={shiftDate(today, isMobile ? -90 : -300)}
              endDate={today}
              values={latestHeatMapDates.map(ele => ({
                date: ele.updated_at,
                count: ele.open_issues_count,
              }))}
              gutterSize={5}
              showWeekdayLabels
            />
          </div>
          <div className="contribution">
            <div className="activity">
              <h4>Contribution Activity</h4>
              {/* eslint-disable-next-line jsx-a11y/heading-has-content */}
              <h4 className="month-date" />
              <span>
                {latestHeatMapDates.length > 0 &&
                  new Date(
                    latestHeatMapDates[latestHeatMapDates.length - 1].updated_at
                  )
                    .toDateString()
                    .substr(4)}
              </span>
              <div className="respository-dates">
                <div className="line-icon"></div>
                <div className="icon">
                  <i className="fas fa-dna"></i>
                </div>
                <h4>Created 1 respository</h4>
              </div>
              <div className="repos-data">
                <div className="repo-name">
                  <i className="fas fa-dna"></i>
                  <h4>
                    {latestHeatMapDates[latestHeatMapDates.length - 1]?.name}
                  </h4>
                </div>
                <div className="repo-language">
                  <i className="fas fa-circle"></i>
                  <h4>
                    {
                      latestHeatMapDates[latestHeatMapDates.length - 1]
                        ?.language
                    }
                  </h4>
                </div>
                <div className="date">
                  <h4>
                    {new Date(
                      latestHeatMapDates[
                        latestHeatMapDates.length - 1
                      ]?.updated_at
                    ).toDateString()}
                  </h4>
                </div>
              </div>
              <button className="activity-button" type="button">
                show more activity
              </button>
            </div>
            <div className="years">
              <h5 className="last-year">2021</h5>
              <h5>2020</h5>
              <h5>2019</h5>
              <h5>2018</h5>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

DataContent.propTypes = {
  repos: PropTypes.array.isRequired,
}

export default DataContent
