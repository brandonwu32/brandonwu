import './navigation-bar.css';
import NavLinks from './navlink';

export default function NavigationBar() {
    return (
        <div className='nav-container'>
            <div className='nav-section'>
                <a href='/' className='nav-name'><h2>Brandon Wu</h2></a>
            </div>
            <div className='nav-section'>
                <NavLinks/>
            </div>
        </div>
    )
}