import { FaBirthdayCake, FaHamburger, FaHotdog } from 'react-icons/fa';
import { FaGlassWater } from 'react-icons/fa6';

import { Button } from './styles';

const iconsMap = {
  hamburger: FaHamburger,
  hotdog: FaHotdog,
  drink: FaGlassWater,
  pastel: FaBirthdayCake,
};

interface ScrollJumpButtonProps {
  icon: 'hamburger' | 'hotdog' | 'drink' | 'pastel';
}

export const ScrollJumpButton: React.FC<ScrollJumpButtonProps> = ({ icon }) => {
  const IconComponent = iconsMap[icon];

  return <Button>{IconComponent && <IconComponent />}</Button>;
};
