import styled from '@emotion/styled';

export const ItemsWrapper = styled.div`
  max-width: 855px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    max-width: 500px;
  }
`;

export const UlItem = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 
  @media (max-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

