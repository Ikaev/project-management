import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Divider } from '@material-ui/core';
import DescriptionHeaderComponent from 'core/description/header';
import DescriptionItemComponent from 'core/description/item';
import { getContractorData } from 'module/contractor/duck';
import { getDescriptionItemSelector } from 'core/description/duck';

const ContractorDescription = props => {
  const {  match: { params: { id } } } = props;
  const dispatch = useDispatch();
  const data = useSelector(getDescriptionItemSelector);
  useEffect(() => {
    dispatch(getContractorData(id))
  }, []);


  return (
    <Paper>
      <DescriptionHeaderComponent label='Сведения о заказчике'/>

      <DescriptionItemComponent label='Имя заказчика' value={data.name}/>
      <Divider/>
      <DescriptionItemComponent label='Электронная почта' value={data.email}/>

      <DescriptionItemComponent label='Номер телефона' value={data.phone}/>
    </Paper>
  )
};

export default ContractorDescription