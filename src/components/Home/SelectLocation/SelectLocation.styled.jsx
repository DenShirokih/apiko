import styled from "@emotion/styled";
import Select from 'react-select';

export const SelectElement = styled(Select)`
  .react-select-container {
    // custom styles
  }

  .react-select__control {
    // custom styles
    font-size: 18px;
    width: 200px;
    height: 48px;
    margin-right: 7px;
    padding-left: 25px;
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