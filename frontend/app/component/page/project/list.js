import React from 'react';
import CenterPanelLayout from 'layout/center';
import ProjectList from 'module/project/list';

export default function ProjectListPage() {
  return (
    <CenterPanelLayout title='Список проектов'>
      <ProjectList/>
    </CenterPanelLayout>
  )
}