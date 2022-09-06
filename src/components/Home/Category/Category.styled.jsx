import styled from '@emotion/styled';
import { ReactComponent as Grid } from 'icons/grid.svg';
import Select from 'react-select';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 855px;
`;

export const GridLogo = styled(Grid)`
  width: 17px;
  height: 17px;
  position: absolute;
  z-index: 100;
  left: 10px;
  top: 10px;
`;

export const Background = styled.div`
  padding: 15px 11px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  border: 1px solid #dedee0;
  border-radius: 4px;
  box-shadow: 0px, 1px rgba(0, 0, 0, 0.2171);
  margin-bottom: 15px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperCategory = styled.div`
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
    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }

  .react-select__indicators {
    // custom styles
    width: 35px;
  }
  .react-select__option {
    color: black;
    font-size: 16px;
  }
`;
