import PropTypes from 'prop-types';
import '../Cakes-item/Cakes-item.css';

const CakesItem = ({ img, name, filling, weight = 'not found' }) => {
  return (
    <div className="cake-card">
      <img
        className="cake-card__img"
        src={img}
        alt={name}
        width="200"
        height="200"
      ></img>
      <h2 className="cake-card__name">Назва: {name}</h2>
      <p className="cake-card__text">Начинка: {filling}</p>
      <p className="cake-card__text">Вага: {weight} </p>
    </div>
  );
};

export default CakesItem;

CakesItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  filling: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
};
