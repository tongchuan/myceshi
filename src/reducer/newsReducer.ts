import {
  initialInterface,
  // dataInterface,
  actionInterface
} from '../interface/newsInterface';

const initialState: initialInterface = {
  name: '',
  dataList: []
};

function newsReducer(state = initialState, action: actionInterface) {
  switch (action.type) {
  case 'abc':
    return { ...state, ...action.data };
  default:
    return Object.assign(state, action.data);
  }
}

export {
  initialState
};

export default newsReducer;