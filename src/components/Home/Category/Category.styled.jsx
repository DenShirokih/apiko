import styled from '@emotion/styled';
import {ReactComponent as Grid} from 'icons/grid.svg'
import Select from 'react-select';


export const Container = styled.div`
  margin: 0 auto;
  max-width: 855px;
`;

export const GridLogo = styled(Grid)`
  width: 17px;
  height: 17px;
`


export const Background = styled.div`
  background-color: #ffffff;
  height: 59px;
  display: flex;
  align-items: center;
  border: 1px solid #dedee0;
  border-radius: 10px;
  box-shadow: 0px, 1px rgba(0, 0, 0, 0.2171);
  padding-left: 11px;
  margin-bottom: 15px;
`;

export const SelectCategory = styled(Select)`
  width: 285px;
  height: 35px;
  background-color:#F2F2F2;
  margin-right: 23px;
  border: 1px solid #dedee0;  border-radius: 5px;
`;

