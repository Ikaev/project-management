import React from 'react';
import Layout from 'layout/center';
import FormCreateProject from 'module/project/create';

const FormCreateProjectPage = () => {
  return (
    <Layout
      title='Создание проекта'
    >
      <FormCreateProject/>
    </Layout>
  );
};

export default FormCreateProjectPage