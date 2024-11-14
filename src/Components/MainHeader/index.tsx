import { HamburgerMenu } from '../HamburgerMenu';
import { HeaderContainer, Logo } from './styles';
import { SearchButton } from '../SearchButton';

export const MainHeader = () => {
  return (
    <HeaderContainer>
      <HamburgerMenu />
      <Logo src="src/assets/logo.png" alt="logo" />
      <SearchButton />
    </HeaderContainer>
  );
};
