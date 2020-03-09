import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const items = [
  {
    label: 'Проекты',
    name: 'projects',
  },
  {
    label: 'Сотрудники',
    name: 'employee',
  },
];
export default function Navigation() {

  return (
    <List>
      {items.map(item => (
        <ListItem button key={item.name}>
          <ListItemText primary={item.label}/>
        </ListItem>
      ))}
    </List>
  );
}