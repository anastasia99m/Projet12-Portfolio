
import './index.scss'
import { NavLink } from 'react-router-dom'

function Header(){
   
    return(
        <header>
            <div className="navBar">
                <NavLink to='accueil' activeClassName="active">
                    Accueil
                </NavLink>
                <NavLink to='presentation' activeClassName="active">
                    Presentation
                </NavLink>
                <NavLink to='competences' activeClassName="active">
                    Competences
                </NavLink>
                <NavLink to='projets' activeClassName="active">
                    Projets
                </NavLink>
                <NavLink to='contacts' activeClassName="active">
                    Contacts
                </NavLink>
            </div>
        </header>
    )
}
export default Header