import React from 'react';
import CenterPanelLayout from 'layout/center';
import ProjectList from 'module/project/list';
import { useHistory } from 'react-router-dom';

const ProjectListPage = () => {
  const history = useHistory();
  const handleCreateProject = () => {
    history.push('/projects/create')
  };
  return (
    <CenterPanelLayout
      title='Список проектов'
      handleClick={handleCreateProject}
      buttonTitle='Добавить проект'
      buttonColor='primary'
    >
      <ProjectList/>
    </CenterPanelLayout>
  );
};

export default ProjectListPage