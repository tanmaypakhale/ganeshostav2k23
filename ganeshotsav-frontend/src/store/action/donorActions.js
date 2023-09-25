
export const donorActions = {
  SET_DONOR_DETAILS: "AUTH.SET_DONOR_DETAILS",
};

export const getActions = (dispatch) => {
  return {
    generate: (donorDetails, navigate) =>
      dispatch(generate(donorDetails, navigate)),
    setDonorDetails: (donorDetails) => dispatch(setDonorDetails(donorDetails)),
  };
};

const setDonorDetails = (donorDetails) => {
  return {
    type: donorActions.SET_DONOR_DETAILS,
    donorDetails,
  };
};

const generate = (donorDetails, navigate) => {
  return (dispatch) => {
    dispatch(setDonorDetails(donorDetails));
    navigate('/reciept')
  };
};