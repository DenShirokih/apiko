import { HeaderHome } from 'components/Home/HeaderHome/HeaderHome';
import { ItemList } from 'components/Home/Home/ItemList/ItemList';
import { useGetAllItems } from 'hooks/useGetAllItems';
import { Category } from 'components/Home/Category/Category';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'redux/itemsSelectors';

export const HomeView = () => {
  const filtredItems = useSelector(itemsSelectors.getFilter);
  const itemLocation = useSelector(itemsSelectors.getLocation);
  const items = useGetAllItems();

  const filterItemsByLocation =(array) => {
    if (!itemLocation) {
      return array;
    } else {
      const itemsLocationForFilter = array.filter(item => item.location === itemLocation);
      return itemsLocationForFilter;
    }
  }

//==== Вирант Денис

  // const filterItems =() => {
  //  if(filtredItems.length > 0){
  //   const sortedItems = items.filter(item =>
  //     item.title.toLowerCase().includes(filtredItems)
  //   );
  //   return sortedItems
  //  }
  //  return items
  // }



  return (
    <>
      <HeaderHome />
      <Category />
      {filtredItems.length > 0 ? (
        <ItemList items={filterItemsByLocation(filtredItems)} />
      ) : (
        <ItemList items={filterItemsByLocation(items)}  />
      )}
    </>
  );
};
