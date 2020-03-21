import React from 'react';
import { Box, Button, TextField, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import CreateFormPageCore from 'core/create';
import { createProjectData } from 'module/project/duck';
import { useDispatch } from 'react-redux';
import  { useHistory } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const FormCreateProject = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    dispatch(createProjectData(data, history))
  };
  return (
    <CreateFormPageCore>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.root} mb={2}>
          <TextField
            name='name'
            id="name"
            label='Наименование проекта'
            variant="outlined"
            inputRef={register({required: true})}
          />
          {errors.name && errors.name.type === 'required' && (
            <span>Это поле обязательно для заполнения</span>
          )}
          <TextField
            name='contract_amount'
            id="contract_amount"
            label='Стоимость проекта'
            variant="outlined"
            inputRef={register({required: true})}
          />
          {errors.contract_amount && errors.contract_amount.type === 'required' && (
            <span>Это поле обязательно для заполнения</span>
          )}
          <TextField
            name='date_start'
            id="date_start"
            label='Дата начала'
            type='date'
            inputRef={register({required: true})}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Button color='primary' type="submit">Сохранить</Button>
      </form>
    </CreateFormPageCore>
  );
};

export default FormCreateProject