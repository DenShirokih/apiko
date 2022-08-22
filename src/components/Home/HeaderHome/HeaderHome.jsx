import {
  Header,
  LinkItem,
  ApicoLogo,
  Button,
  Container,
  ContainerFilter,
} from './HeaderHome.styled';
import { Filter } from '../Filter/Filter';

export const HeaderHome = () => {
  return (
    <Header>
      <Container>
        <Button>
          <ApicoLogo />
        </Button>
        <div>
          <LinkItem to="/add">ADD</LinkItem>
          <LinkItem to="/login">login</LinkItem>
        </div>
      </Container>
      <ContainerFilter>
        <Filter/>
      </ContainerFilter>
    </Header>
  );
};
