import { ItemCard } from '../ItemCard/ItemCard';
import { ItemsWrapper, UlItem } from './ItemList.styled';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';
import { filterSelectors } from 'redux/filterSelectors';


export const ItemList = () => {
  const items = useSelector(itemsSelectors.getAllProducts);
  const values = useSelector(filterSelectors.getSearch)

console.log(values)

 
 
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
