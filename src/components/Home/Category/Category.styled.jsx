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
  position: absolute;
  z-index: 500;
  left: 20px;
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
  position: relative;
`;



export const SelectElement = styled(Select)`
  .react-select-container {
    // custom styles
  }

  .react-select__control {
    // custom styles
    font-size: 14px;
    width: 285px;
    height: 35px;
    margin-right: 23px;
    padding-left: 30px;
    
  }

  .react-select__indicators {
    // custom styles
    width: 35px;
  }
  .react-select__option{
    color: black;
    font-size: 16px;
  }

`;