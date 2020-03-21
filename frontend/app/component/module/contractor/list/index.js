import React from 'react';
import ListComponent from 'core/list';
import { getContractorListData } from 'module/contractor/duck';
import Item from './item';

const ContractorListComponent = () => {
  return (
    <ListComponent
      Item={Item}
      getData={getContractorListData}
      headers={
        [
          {label: 'Наименование', size: 4},
        ]
      }
    />
  )
};

export default ContractorListComponent
