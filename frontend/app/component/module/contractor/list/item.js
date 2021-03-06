import React from 'react';
import { useHistory } from 'react-router-dom';
import Row from 'core/list/item';
import Cell from 'core/list/cell';
import Typography from '@material-ui/core/Typography';

const ContractorItemComponent = props => {
  const { item } = props;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/contractors/${item._id}/description`);
  };
  return (
    <Row onClick={handleClick}>
      <Cell xs={4}>
        <Typography>{item.name}</Typography>
      </Cell>
    </Row>
  )
};

export default ContractorItemComponent