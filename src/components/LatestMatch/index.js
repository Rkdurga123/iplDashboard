// Write your code here
import './index.css'

const LatestMatch = props => {
  const {lastMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
    venue,
    result,
  } = lastMatchDetails

  return (
    <div className="last-container">
      <div className="small">
        <div className="first-div">
          <h1 className="heading">{competingTeam}</h1>
          <p className="date">{date}</p>
          <p className="description">{venue}</p>
          <p className="description">{result}</p>
        </div>
        <div className="img-div">
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="imageLogo"
          />
        </div>
        <hr />
      </div>
      <div className="second-div">
        <p className="description1">First Innings</p>
        <p className="description">{firstInnings}</p>
        <p className="description1">Second Innings</p>
        <p className="description">{secondInnings}</p>
        <p className="description1">Man Of The Match</p>
        <p className="description">{manOfTheMatch}</p>
        <p className="description1">Umpires</p>
        <p className="description">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
