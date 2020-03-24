import React from 'react';
import { Box, Button, TextField, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import CreateFormPageCore from 'core/create';
import { createContractorData } from 'module/contractor/duck';
import { useDispatch } from 'react-redux';
import  { useHistory } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
const FormCreateContractor = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    dispatch(createContractorData(data, history))
  };
  return (
    <CreateFormPageCore>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.root} mb={2}>
          <TextField
            name='name'
            id="name"
            label='Имя заказчика'
            variant="outlined"
            inputRef={register({required: true})}
          />
          {errors.name && errors.name.type === 'required' && (
            <span>Это поле обязательно для заполнения</span>
          )}
          <TextField
            name='email'
            id="email"
            label='Электронная почта'
            variant="outlined"
            inputRef={register({required: true})}
          />
          {errors.contract_amount && errors.contract_amount.type === 'required' && (
            <span>Это поле обязательно для заполнения</span>
          )}
          <TextField
            name='phone'
            id="phone"
            label='Номер телефона'
            inputRef={register({required: true})}
            variant="outlined"
          />
        </Box>
        <Button color='primary' type="submit">Сохранить</Button>
      </form>
    </CreateFormPageCore>
  );
};

export default FormCreateContractor