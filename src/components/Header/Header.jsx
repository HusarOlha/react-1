import Menu from 'components/Menu/Menu';
import { ReactComponent as LogoIcon } from '../../assets/images/logo.svg';
import '../../components/Header/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className=" container header-container">
        <h1 className="header-container__text">
          <LogoIcon id="logo"></LogoIcon>Awesome Cakes
        </h1>

        <Menu></Menu>
      </div>
    </header>
  );
};

export default Header;
