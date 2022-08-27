import { Container, Background, Select, Input,GridLogo } from './Category.styled';

export const Category = () => {
  return (
    <Container>
      <Background>
      <GridLogo/> 
        <Select name="" id=""> 
          {/* <option value="value1" selected>Choose Category</option>
          <option value="value2">Top</option>
          <option value="value3">Best price</option> */}
        </Select>
        <Input type="text" />
        <Input type="text" />
      </Background>
    </Container>
  );
};
