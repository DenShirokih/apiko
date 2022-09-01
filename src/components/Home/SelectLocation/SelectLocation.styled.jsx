import styled from "@emotion/styled";
import Select from 'react-select';

export const SelectElement = styled(Select)`
  .react-select-container {
    // custom styles
  }

  .react-select__control {
    // custom styles
    font-size: 18px;
    height: 48px;
    padding-left: 25px;
    @media (max-width: 768px ) {
      height: 15px;
      text-align: center;
    }
  }

  .react-select__indicators {
    // custom styles
    width: 35px;
  }
  .react-select__option{
    color: black;
    font-size: 16px;
  }
  .react-select__menu{
    z-index: 600;
  }
`;