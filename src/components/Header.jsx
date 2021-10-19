import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='#1a237e indigo darken-4'>
      <div className='nav-wrapper wrap'>
        <span className='brand-logo logo left'>Weather</span>
        <ul id='nav-mobile' className='right'>
          <li>
            <Link to='/weather/'>Home</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Header };
