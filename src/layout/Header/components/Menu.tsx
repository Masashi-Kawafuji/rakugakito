import { FC } from 'react';
import MenuItem from './MenuItem';

type MenuProps = {
  vertical?: boolean;
};

const Menu: FC<MenuProps> = ({ vertical = false }) => {
  return (
    <ul
      className={`flex ${
        vertical ? 'flex-col' : 'flex-row flex-1 justify-around'
      } text-lighten`}
    >
      <MenuItem exact to="/">
        Home
      </MenuItem>
      <MenuItem to="/news">News</MenuItem>
      <MenuItem to="/songs">Song</MenuItem>
      <MenuItem to="/video">Video</MenuItem>
      <MenuItem to="/about">About</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
    </ul>
  );
};

export default Menu;
