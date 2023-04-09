import PropTypes from 'prop-types';

const CakesItem = ({ img, name, filling, weight = 'not found' }) => {
  return (
    <>
      <img src={img} alt={name} width="200" height="200"></img>
      <h1>Назва: {name}</h1>
      <p>Начинка: {filling}</p>
      <p>Вага: {weight} </p>
    </>
  );
};

export default CakesItem;

CakesItem.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  filling: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
};
