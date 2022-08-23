import { ItemCard } from '../ItemCard/ItemCard';
import { ItemsWrapper, UlItem } from './ItemList.styled';
export const ItemList = ({ item }) => {
  return (
    <ItemsWrapper>
      <UlItem>
        {item.map(({ title, location, description, price, id }) => (
          <ItemCard
            key={id}
            title={title}
            location={location}
            description={description}
            price={price}
          />
        ))}
      </UlItem>
    </ItemsWrapper>
  );
};
