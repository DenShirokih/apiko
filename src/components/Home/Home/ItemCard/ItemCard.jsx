import { ItemWrapper } from './ItemCard.styled';
export const ItemCard = ({ title, location, description, price }) => {
  return (
    <ItemWrapper>
      <p>{title}</p>
    </ItemWrapper>
  );
};
