import Axios from 'axios';

/* SELECTORS */
export const getGlobal = ({globalData}) => globalData;

/* ACTION NAME CREATOR */
const reducerName = 'global';
const createActionName = name => `app/${reducerName}/${name}`;

/* ACTION TYPES */
const CHANGE_SCHEDULE = createActionName('CHANGE_SCHEDULE');
const SET_SUCCESS = createActionName('SIGNAL_SUCCESS');

/* ACTION CREATORS */
export const changeSchedule = payload => ({ payload, type: CHANGE_SCHEDULE });
export const setSuccess = payload => ({ payload, type: SET_SUCCESS });

/* THUNK CREATORS */
export const sendFormData = (formData) => {
  return (dispatch) => {
    Axios
      .post(`https://cors-anywhere.herokuapp.com/https://postman-echo.com/post`, formData)
      .then(res => {
        dispatch(setSuccess(true));
      })
      .catch(err => {
        console.log(err.message);
      });
  };
};


/* REDUCER */
export const reducer = (statePart = [], action = {}, state) => {
  switch (action.type) {
    case CHANGE_SCHEDULE: {
      return {
        ...statePart,
        scheduleOption: action.payload,
      };
    }
    case SET_SUCCESS: {
      return {
        ...statePart,
        success: action.payload,
      };
    }
    default:
      return statePart;
  }
};
