import styled from '@emotion/styled';
export const ItemWrapper = styled.li`
  padding: 3px;
  display: flex;
  flex-direction: column;
  flex-basis: 24%;
  margin-left: 7px;
  margin-bottom: 13px;
`;
export const ImgItem = styled.img`
  height: 150px;
  min-width: 200px;
  object-fit: fill;
`;
export const ImgWrapper = styled.div`
  text-align: center;
`;

export const ItemDiscriptions = styled.div`
  padding-left: 3px;
  font-size: 20px;
`;
// location,
export const ItemTitle = styled.p`
  font-size: 15px;
  font-family: 'Helvetica Neue';
`;
export const ItemPrice = styled.p`
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
`;
export const ItemLocation = styled.p`
  font-size: 14px;
`;
