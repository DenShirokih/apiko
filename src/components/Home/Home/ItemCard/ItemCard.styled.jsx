import styled from '@emotion/styled';
import { ReactComponent as LogoLike } from 'icons/like2.svg';
import { ReactComponent as ActiveLike } from 'icons/like2.svg';

export const ActiveLogoLike = styled(ActiveLike)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 17px;
  height: 17px;
  color: #349a89;
  stroke: black;
`;

export const ItemWrapper = styled.li`
  padding: 4px;
  display: flex;
  flex-direction: column;
  flex-basis: 23%;
  margin-right: 5px;
  margin-bottom: 13px;
  background-color: #ffffff;
  border-radius: 5px;
  @media (max-width: 768px) {
    flex-basis: 100%;
    width: 200px;
  }
  @media (max-width: 1200px) {
    flex-basis: 46%;
    width: 250px;
  }
`;
export const ImgItem = styled.img`
  height: 150px;
  min-width: 200px;
  object-fit: cover;
  border-radius: 5px 5px 0px 0px;
  
`;
export const ImgWrapper = styled.div`
  text-align: center;
  position: relative;
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

export const Like = styled.div`
  position: absolute;
  bottom: -12px;
  right: 8px;
  width: 30px;
  height: 30px;
  border: 1px solid #f2f2f2;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.label`
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
`;

export const LikeLogo = styled(LogoLike)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 17px;
  height: 17px;
  color: white;
  stroke: black;
`;

export const LikeButton = styled.input`
  position: relative;
  padding: 10px;
  display: none;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: transparent;
`;
