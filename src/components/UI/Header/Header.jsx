import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../../assets/logo.svg';

const Header = () => {
    return (
        <header className='container header'>
            <div className="header__screen">
                <Link to={'/'} className='header__logo'>
                    <img src={logo} alt="Yeva Vlasova" />
                </Link>
                <div className="header__nav">
                    <Link to={'/'}>About</Link>
                    <Link to={'/contacts'}>Contacts</Link>
                </div>
            </div>
        </header>
    );
}
export default Header;