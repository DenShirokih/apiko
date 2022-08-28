import { ItemCard } from '../ItemCard/ItemCard';
import { ItemsWrapper, UlItem } from './ItemList.styled';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { filterSelectors } from 'redux/filterSelectors';

export const ItemList = () => {
  const items = useSelector(itemsSelectors.getFiltredProducts);
  // const values = useSelector(filterSelectors.getSearch);

  // const normalaizedFilter = values.search.toLowerCase();
  // const filtredItems = items.filter(item =>
  //   item.title.toLowerCase().includes(normalaizedFilter)
  // );
  // dispatch(products(filtredItems))
  // const filtredItems = () => {
  //   const array = [];
  //   // if (values.title) {
  //     const filtredItems = items.filter(item =>
  //       item.title.toLowerCase().includes(values.title) &&  item.location.includes(values.location)
  //     );
  //     array.push(filtredItems);
  //   // }
  //   // if (values.location) {
  //   //   const filtred = items.filter(item =>
  //   //     item.location.includes(values.location)
  //   //   );
  //   //   array.push(filtred);
  //   // }
  //   return array;
  // };
  // console.log(filtredItems());
  return (
    <ItemsWrapper>
      <UlItem>
        {items.map(({ title, location, description, price, id, photo }) => (
          <ItemCard
            key={id}
            id={id}
            title={title}
            location={location}
            description={description}
            price={price}
            photo={photo}
          />
        ))}
      </UlItem>
    </ItemsWrapper>
  );
};
