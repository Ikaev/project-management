import React from 'react';
import ListComponent from 'core/list';
import { getProjectListData } from 'module/project/duck';
import Item from './item';

export default function ProjectListComponent() {
  return (
    <ListComponent
      Item={Item}
      getData={getProjectListData}
      headers={
        [
          {label: 'Наименование', size: 4},
          {label: 'Заказчик', size: 4},
        ]
      }
    />
  )
}