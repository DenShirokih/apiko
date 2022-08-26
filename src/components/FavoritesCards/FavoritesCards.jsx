import { useGetFavoritesItems } from 'hooks/useGetFavoritesItems';
import { useGetAllItems } from 'hooks/useGetAllItems';
import { ItemCard } from 'components/Home/Home/ItemCard/ItemCard';
import {
  ItemsWrapper,
  UlItem,
} from 'components/Home/Home/ItemList/ItemList.styled';

export const FavoritesCards = () => {
  const {items, keys} = useGetFavoritesItems();
  const ids = items.flatMap(item => item.id);
  const AllItems = useGetAllItems();

  const findFavoritesCards = () => {
    const result = [];
    for (let i = 0; i < ids.length; i++) {
      for (let j = 0; j < AllItems.length; j++) {
        if (ids[i] === AllItems[j].id) {
          result.push(AllItems[j]);
        }
      }
    }
    return result;
  };

  return (
    <>
      {items && (
        <ItemsWrapper>
          <UlItem>
            {findFavoritesCards().map(
              ({ title, location, description, price, id, photo }) => (
                <ItemCard
                  key={id}
                  id={id}
                  title={title}
                  location={location}
                  description={description}
                  price={price}
                  photo={photo}
                />
              )
            )}
          </UlItem>
        </ItemsWrapper>
      )}
    </>
  );
};
