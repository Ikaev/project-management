import React from 'react';
import Layout from 'layout/center';
import ProjectDescription from 'module/project/description';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteProject } from 'module/project/duck';

const ProjectDescriptionPage = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {  match: { params: { id } } } = props;
  const handleDeleteProject = () => {
    dispatch(deleteProject(id, history))
  };
  return (
    <Layout
      handleClick={handleDeleteProject}
      buttonTitle='Удалить проект'
      buttonColor='secondary'
    >
      <ProjectDescription {...props}/>
    </Layout>
  )
};

export default ProjectDescriptionPage