import { HamburgerMenu } from '../HamburgerMenu';
import { HeaderContainer, Logo, Info, Imagem} from './styles';
import { SearchButton } from '../SearchButton';


export const ItemCard  = () => {
  return (

//	<>
//	<Imagem>
//	</Imagem>
	<Imagem>
	<Logo src="src/assets/logo.png"/>
		<h1>Pastel de Carne</h1>
		<p> Carne moida bovina (patinho) temperada com sal, cheiro verde, cebola e azeite</p>
		<input type="text" placeholder="Digital" />
	</Imagem>
//	</>
  );
};
