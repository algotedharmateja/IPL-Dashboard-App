// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const formatedData = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    id: latestMatchDetails.id,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  const {
    umpires,
    result,
    manOfTheMatch,

    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = formatedData

  return (
    <div className="latest-match-container">
      <p className="latest-match-heading">LatestMatch</p>
      <div className="latest-match-card">
        <div className="innings-teams-container">
          <div className="innings-teams">
            <p className="latest-match-team-name">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="latest-match-team-logo"
          />
        </div>
        <hr className="horizontal-line" />
        <div className="innings-details">
          <p className="para head">First Innings</p>
          <p className="para">{firstInnings}</p>
          <p className="para head">Second Innings</p>
          <p className="para">{secondInnings}</p>
          <p className="para head">Man Of The Match</p>
          <p className="para">{manOfTheMatch}</p>
          <p className="para head">Umpires</p>
          <p className="para">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
