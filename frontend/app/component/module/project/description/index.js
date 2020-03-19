import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Divider } from '@material-ui/core';
import DescriptionHeaderComponent from 'core/description/header';
import DescriptionItemComponent from 'core/description/item';
import { getProjectData } from 'module/project/duck';
import { getDescriptionItemSelector } from 'core/description/duck';

export default function ProjectDescription(props) {
  const {  match: { params: { id } } } = props;
  const dispatch = useDispatch();
  const data = useSelector(getDescriptionItemSelector);
  useEffect(() => {
    dispatch(getProjectData(id))
  }, []);


  return (
    <Paper>
      <DescriptionHeaderComponent label='Сведения о проекте'/>

      <DescriptionItemComponent label='Наименование' value={data.name}/>
      <Divider/>
      <DescriptionItemComponent label='Сумма' value={data.contract_amount}/>

      <DescriptionHeaderComponent label='Сроки'/>

      <DescriptionItemComponent label='Дата начала проекта' value={data.date_start}/>
      <Divider/>
      <DescriptionItemComponent label='Дата окончания проекта' value={data.date_end}/>

    </Paper>
  )

}