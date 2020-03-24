import React from 'react';
import Layout from 'layout/center';
import FormCreateContractor from 'module/contractor/create';

const FormCreateContractorPage = () => {
  return (
    <Layout
      title='Создание заказчика'
    >
      <FormCreateContractor/>
    </Layout>
  );
};

export default FormCreateContractorPage