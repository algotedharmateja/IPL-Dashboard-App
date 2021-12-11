// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrlImg: '',
    latestMatchDetailsList: '',
    recentMatchesList: [],
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const promise = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await promise.json()
    console.log(id)

    const updatedMatchData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    const {teamBannerUrl, latestMatchDetails, recentMatches} = updatedMatchData

    this.setState({
      isLoading: false,
      teamBannerUrlImg: teamBannerUrl,
      latestMatchDetailsList: latestMatchDetails,
      recentMatchesList: recentMatches,
    })
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderMatchesDetails = () => {
    const {
      teamBannerUrlImg,
      latestMatchDetailsList,
      recentMatchesList,
    } = this.state

    return (
      <div className="responsive-container">
        <img src={teamBannerUrlImg} alt="team banner" className="banner-img" />

        <LatestMatch latestMatchDetails={latestMatchDetailsList} />

        <ul className="march-card-container">
          {recentMatchesList.map(eachItem => (
            <MatchCard cardDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    const className = `team-matches-container ${this.getRouteClassName()}`
    return (
      <div className={className}>
        {isLoading ? this.renderLoader() : this.renderMatchesDetails()}
      </div>
    )
  }
}
export default TeamMatches
