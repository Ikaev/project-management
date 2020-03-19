import React from 'react';
import CenterPanelLayout from 'layout/center';
import ContractorList from 'module/contractor/list'
import { useHistory } from 'react-router-dom';
export default function ContractorListPage() {
  const history = useHistory();
  const handleCreateContractor = () => {
    history.push('/contractors/create')
  };
  return (
    <CenterPanelLayout
      title='Список заказчиков'
      handleClick={handleCreateContractor}
      buttonTitle='Добавить заказчика'
      buttonColor='primary'
    >
      <ContractorList/>
    </CenterPanelLayout>
  )
}