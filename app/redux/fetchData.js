import generateMockData from '../../utils/mockData';


const FETCH_DATA = 'FETCH_DATA';

function fetchActionCreator (archiveData){
  return {
    type: 'FETCH_DATA',
    archiveData
  }
};

// * Adding a Thunk just for best practice, and simulating an actual API call with the 'mockData' generator.
export function getDataThunk (){
  return async dispatch => {
    try {
      const response = await generateMockData(50);
      dispatch(fetchActionCreator(response));
    } catch (error) {
      console.error(error);
    };
  };
};

let initialState = {};

export default function FetchDataReducer (state = initialState, action){
  switch(action.type){
    case FETCH_DATA:
      return {state, ...action.archiveData}
    default:
      return state
  };
};
