import '../Menu/Menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <ul className="menu-container__list">
        <button className="menu-container__btn">Ціна</button>
        <button className="menu-container__btn">Як замовити?</button>
      </ul>
    </div>
  );
};

export default Menu;
