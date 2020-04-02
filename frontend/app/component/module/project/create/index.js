import React, { useEffect } from 'react';
import {
  FormControl,
  Grid,
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Box,
  FormHelperText
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import CreateFormPageCore from 'core/create';
import { createProjectData } from 'module/project/duck';
import { useDispatch, useSelector } from 'react-redux';
import  { useHistory } from 'react-router-dom';
import { getContractorListData } from 'module/contractor/duck';
import { getListItemsSelector } from 'core/list/duck';

const useStyle = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    minWidth: 120
  },


}));
const FormCreateProject = () => {
  const classes = useStyle();
  const dispatch = useDispatch();
  const history = useHistory();
  const contractorList = useSelector(getListItemsSelector);
  const { register, handleSubmit, watch, errors, control } = useForm();
  useEffect(() => {
    dispatch(getContractorListData())
  }, []);
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log(data);
    dispatch(createProjectData(data, history))
  };
  return (
    <CreateFormPageCore>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={3}>
            <FormControl error={Boolean(errors.name)}>
              <TextField
                name='name'
                id="name"
                label='Наименование проекта'
                variant="outlined"
                inputRef={register({required: true})}
              />
              <FormHelperText>
                {errors.name && errors.name.type === 'required' && (
                  <span>Это поле обязательно для заполнения</span>
                )}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl error={Boolean(errors.contractAmount)}>
              <TextField
                name='contractAmount'
                id="contractAmount"
                label='Стоимость проекта'
                variant="outlined"
                inputRef={register({required: true})}
              />
              <FormHelperText>
                {errors.contractAmount && errors.contractAmount.type === 'required' && (
                  <span>Это поле обязательно для заполнения</span>
                )}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              name='dateStart'
              id="dateStart"
              label='Дата начала'
              type='date'
              inputRef={register({required: true})}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl error={Boolean(errors.contractor)} variant="outlined" className={classes.formControl}>
              <InputLabel id="contractor-select-label">Заказчик</InputLabel>
              <Controller
                name='contractor'
                control={control}
                defaultValue=""
                rules={{required: 'Это поле обязательно для заполнения'}}
                as={
                <Select
                  labelId="contractor-select-label"
                  label="Заказчик"
                >
                  {contractorList.map(contractor => <MenuItem key={contractor._id} value={contractor._id}>{contractor.name}</MenuItem>)}
                </Select>
              }/>
              <FormHelperText>
                {errors.contractor && errors.contractor.message}
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Box mt={1}>
          <Button variant="contained" color='primary' type="submit">Сохранить</Button>
        </Box>
      </form>
    </CreateFormPageCore>
  );
};

export default FormCreateProject