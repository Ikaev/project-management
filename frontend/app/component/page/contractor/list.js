import React from 'react';
import CenterPanelLayout from 'layout/center';
import ContractorList from 'module/contractor/list'

export default function ContractorListPage() {
  return (
    <CenterPanelLayout title='Список заказчиков'>
      <ContractorList/>
    </CenterPanelLayout>
  )
}