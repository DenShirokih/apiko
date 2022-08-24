import {
  ItemWrapper,
  ImgItem,
  ItemDiscriptions,
  ItemTitle,
  ImgWrapper,
  ItemPrice,
  ItemLocation,
} from './ItemCard.styled';
export const ItemCard = ({ title, location, description, price, photo }) => {
  return (
    <ItemWrapper>
      <ImgWrapper>
        <ImgItem src={photo} alt={title} />
      </ImgWrapper>
      <ItemDiscriptions>
        <ItemTitle>{title}</ItemTitle>
        <ItemPrice>${price}</ItemPrice>
        <ItemLocation>{location}</ItemLocation>
      </ItemDiscriptions>
    </ItemWrapper>
  );
};
