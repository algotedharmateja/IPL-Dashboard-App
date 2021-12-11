// Write your code here

import './index.css'

const MatchCard = props => {
  const {cardDetails} = props
  const cardDetailsList = {
    competingTeamLogo: cardDetails.competing_team_logo,
    competingTeam: cardDetails.competing_team,
    result: cardDetails.result,
    matchStatus: cardDetails.match_status,
  }

  const {
    competingTeamLogo,
    competingTeam,
    result,
    matchStatus,
  } = cardDetailsList

  const isWon = matchStatus === 'Won' ? 'status-green' : 'status-red'

  return (
    <li className="match-card-item-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="card-img"
      />
      <p className="card-heading">{competingTeam}</p>
      <p className="card-result">{result}</p>
      <p className={`card-status ${isWon}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
