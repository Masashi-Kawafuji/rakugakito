/* eslint-disable react/jsx-props-no-spreading */
import { FC, ComponentPropsWithoutRef } from 'react';
import { NavLink } from 'react-router-dom';

type MenuItemProps = ComponentPropsWithoutRef<typeof NavLink>;

const MenuItem: FC<MenuItemProps> = ({
  children,
  className = 'block box-border px-2 py-2 font-light',
  activeClassName = 'text-primary border-b-2 border-primary',
  ...restProps
}) => (
  <li>
    <NavLink
      className={className}
      activeClassName={activeClassName}
      {...restProps}
    >
      {children}
    </NavLink>
  </li>
);

export default MenuItem;
