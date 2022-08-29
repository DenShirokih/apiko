import { ItemCard } from '../ItemCard/ItemCard';
import { ItemsWrapper, UlItem } from './ItemList.styled';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';

export const ItemList = () => {
  const items = useSelector(itemsSelectors.getFiltredProducts);
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
