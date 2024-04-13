// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  return (
    <li className="match-list">
      <img src={competingTeamLogo} alt={competingTeam} className="teamLogo" />
      <h1 className="title">{competingTeam}</h1>
      <p className="result">{result}</p>
      <p className="result">{matchStatus}</p>
    </li>
  )
}
export default MatchCard
