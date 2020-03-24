import React from 'react';
import Layout from 'layout/center';
import ContractorDescription from 'module/contractor/description';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteContractor } from 'module/contractor/duck';

const ContractorDescriptionPage = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {  match: { params: { id } } } = props;
  const handleDeleteProject = () => {
    dispatch(deleteContractor(id, history))
  };
  return (
    <Layout
      handleClick={handleDeleteProject}
      buttonTitle='Удалить заказчика'
      buttonColor='secondary'
    >
      <ContractorDescription {...props}/>
    </Layout>
  )
};

export default ContractorDescriptionPage