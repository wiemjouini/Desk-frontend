import { registrationPending, registrationSuccess, registrationError } from './userRegistrationSlice';
import { userRegistration } from '../../api/userApi'; // <-- à adapter si nécessaire

{/*export const newUserRegistration = (frmDt) => async (dispatch) => {
  try {
    //dispatch(registrationPending());

    const result = await userRegistration(frmDt);
    result.status==='success' ? 
    dispatch (registrationSuccess(result.message))
    : dispatch(registrationError(error.message));


    console.log(result);

  } catch (error) {
    dispatch(registrationError(error.message));
  }
};*/}
export const newUserRegistration = (frmDt) => async (dispatch) => {
  try {
    dispatch(registrationPending());

    const result = await userRegistration(frmDt);
    console.log(result);

    if (result.status === 'success') {
      dispatch(registrationSuccess(result.message));
    } else {
      dispatch(registrationError(result.message)); // <-- ici c’est result.message et non error.message
    }

  } catch (error) {
    dispatch(registrationError(error.message));
  }
};

