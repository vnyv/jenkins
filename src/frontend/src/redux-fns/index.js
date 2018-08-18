import { map } from 'redux-data-structures';

export const createListReducer = ({
  initialState = {
    byId: {},
    allIds: [],
  },
  changeActionTypes
}) => {
  return map({
    initialState,
    changeActionTypes
  });  
};


export const selectList  = () => [];

