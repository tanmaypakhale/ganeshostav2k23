import { donorActions } from '../action/donorActions';

const initState = {
  donorDetails: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case donorActions.SET_DONOR_DETAILS:
      return {
        ...state,
        donorDetails: action.donorDetails,
      };
    default:
      return state;
  }
};

export default reducer;
