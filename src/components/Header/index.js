// NavLink - создает ссылку, которая НЕ будет перегружать страницу
import style from './style.module.css'
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

function Header() {
  return (
    <>
      <header>
        <div>
          <div class={style.logo}>
            <img src={logo} alt="LOGO"/>
          </div>
        </div>
        <div class={style.navlinks}>
          {/* <NavLink to="/aboutPage"></NavLink> = <a src="/aboutPage"></a>*/}
          <NavLink to="/about"> About </NavLink> <br />
          <NavLink to="/winterTree"> Winter Tree </NavLink> <br />
          <NavLink to="/nature"> Nature Images </NavLink>
        </div>
      </header>
    </>
  );
}

export default Header;