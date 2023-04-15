import { Link } from 'react-router-dom'

export default function Header () {

    return (
        <div className='Header'>
          
          
          <Link to='/About'> <h2>About</h2> </Link>
          <Link to='/Contact'> <h2>Contact</h2> </Link>
          <Link to='/Projects'> <h2>Projects</h2> </Link>
          <Link to='/Resume'> <h2>Resume</h2> </Link>
        </div>
    )
}