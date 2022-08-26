import { ItemCard } from '../ItemCard/ItemCard';
import { ItemsWrapper, UlItem } from './ItemList.styled';

export const ItemList = ({ items }) => {
  
  return (
    <ItemsWrapper>
      <UlItem>
        {items.map(({ title, location, description,  price, id, photo }) => (
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
