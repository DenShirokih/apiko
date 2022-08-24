import { ItemCard } from '../ItemCard/ItemCard';
import { ItemsWrapper, UlItem } from './ItemList.styled';
export const ItemList = ({ item }) => {
  return (
    <ItemsWrapper>
      <UlItem>
        {item.map(({ title, location, description, price, id, photo }) => (
          <ItemCard
            key={id}
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
