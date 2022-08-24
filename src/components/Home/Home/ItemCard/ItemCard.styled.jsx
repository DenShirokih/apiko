import styled from '@emotion/styled';
import {ReactComponent as LogoLike} from 'icons/like.svg'


export const ItemWrapper = styled.li`
  padding: 4px;
  display: flex;
  flex-direction: column;
  flex-basis: 23%;
  margin-right: 5px;
  margin-bottom: 13px;
  background-color: #ffffff;
  border-radius: 5px;
`;
export const ImgItem = styled.img`
  height: 150px;
  min-width: 200px;
  object-fit: fill;
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
  border:  1px solid #F2F2F2;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LikeLogo = styled(LogoLike)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  width: 17px;
  height: 17px; 
  /* :checked{
    background-color: #349A89;
  } */
`

export const LikeButton = styled.input`
position: relative;
  padding: 10px;
  display: none;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`