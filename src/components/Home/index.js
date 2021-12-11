// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const promise = await fetch('https://apis.ccbp.in/ipl')

    const data = await promise.json()
    const {teams} = data

    const formattedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamCardList: formattedData, isLoading: false})
  }

  render() {
    const {teamCardList, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="ipl-logo-img"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="teams-container">
            {teamCardList.map(eachTeam => (
              <TeamCard teamDetails={eachTeam} key={eachTeam.name} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
