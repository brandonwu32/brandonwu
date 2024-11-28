import './navigation-bar.css';
import NavLinks from './navlink';

export default function NavigationBar() {
    return (
        <div className='nav-container'>
            <div className='nav-section'>
                <h2 className='nav-name'>Brandon Wu</h2>
            </div>
            <div className='nav-section'>
                <NavLinks/>
            </div>
        </div>
    )
}