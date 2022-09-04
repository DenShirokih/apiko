import { LinkItem, Container, ApicoLogo } from './HeaderForm.styled';
import { FormattedMessage } from 'react-intl';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';

export const HeaderForm = () => {
  let isPageWide = useMediaQuery('(min-width: 769px)');

  return (
    <Container>
      <LinkItem to="/">
        <ApicoLogo />
      </LinkItem>
      {isPageWide ? (
        <div>
          <LinkItem to="/">
            <FormattedMessage id="Home" />
          </LinkItem>
          <LinkItem to="/login">
            <FormattedMessage id="loginTitle" />
          </LinkItem>
        </div>
      ) : (
        <BurgerMenu/>
      )}
    </Container>
  );
};
