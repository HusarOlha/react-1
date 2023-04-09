import CakesItem from 'components/Cakes-item/Cakes-item';
const Cakes = props => {
  const cakes = [
    {
      id: 1,
      img: 'https://foodmood.ru/upload/iblock/c25/c25878fe05eecdc5abedce7178ec74aa.png',
      name: 'Наполеон',
      filling: 'Заварний крем',
      weight: 1.5,
    },
    {
      id: 2,
      img: 'https://static.1000.menu/res/640/img/content-v2/2e/63/26665/chizkeik-nu-iork-klassicheskii_1630161417_0_max.jpg',
      name: 'Чізкейк',
      filling: 'Сирний крем',
      weight: 1.2,
    },
    {
      id: 3,
      img: 'https://images.unian.net/photos/2020_04/thumb_files/1200_0_1588166710-5560.jpg',
      name: 'Медовик',
      filling: 'Сметаний крем',
      weight: 1.8,
    },
    {
      id: 4,
      img: 'https://dariasaveleva.com/wp-content/uploads/2018/11/Ideal-ny-j-limonny-j-tort-3-1.jpg',
      name: 'Лимонний',
      filling: 'Меренга',
      weight: 1.5,
    },
    {
      id: 5,
      img: 'https://www.koolinar.ru/all_image/recipes/137/137034/recipe_0cb501fa-7100-4bd2-bc8f-28edd7af398b.jpg',
      name: 'Шоколадний',
      filling: 'Шоколадний крем',
      weight: 1.2,
    },
    {
      id: 6,
      img: 'https://cdn.vkusnoo.com.ua/images/17272/17272-b3e99e80.jpg',
      name: 'Бісквітний',
      filling: 'Вершковий крем',
      weight: 1.8,
    },
  ];
  return (
    <section>
      <h1>Обери свій тортик</h1>
      <>
        {cakes.map(cake => {
          return <CakesItem key={cake.id} {...cake} />;
        })}
      </>
    </section>
  );
};
export default Cakes;
