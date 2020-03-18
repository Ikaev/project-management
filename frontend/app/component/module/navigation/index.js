import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { hideNavigation } from 'module/navigation/duck';
import { MenuList, MenuItem, ListItemText } from '@material-ui/core';

const items = [
  {
    label: 'Заказчики',
    name: 'contractors',
    url: '/contractors'
  },
  {
    label: 'Проекты',
    name: 'projects',
    url: '/projects'
  },
  {
    label: 'Сотрудники',
    name: 'employee',
    url: '/employees'
  },
];
export default function Navigation() {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleMenuItemClick = (url) => () => {
    history.push(url);
    dispatch(hideNavigation());
  };
  return (
    <MenuList>
      {items.map(item => (
        <MenuItem button key={item.name} onClick={handleMenuItemClick(item.url)}>
          {item.label}
        </MenuItem>
      ))}
    </MenuList>
  );
}