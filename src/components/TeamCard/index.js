// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {teamCardDetails} = props
  const {id, name, teamImageUrl} = teamCardDetails

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="list-items">
        <img src={teamImageUrl} className="image" alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
