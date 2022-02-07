  
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: false,
    authFlag: false,
    user: {
        _id: '',
        email: '',
        address: '',
        country: '',
        zipcode: '',
        firstname: '',
        lastname: '',
        mobilenumber: '',
        avatar: '',
        wallet: '',
        date_form: ''
    },
};
  
  function authReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'USER_LOADED':
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload
        };
      case 'REGISTER_SUCCESS':
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
          authFlag: true,
        };
      case 'SM_REGISTER_SUCCESS':
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
          authFlag: true,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
          authFlag: true,
        };
      case 'ACCOUNT_DELETED':
      case 'AUTH_ERROR':
      case 'LOGOUT':
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
          user: {},
        };
      case 'SET_AUTH_FLAG':
        return {
          ...state,
          authFlag: false
        }
      case 'SET_VERIFYEMAIL':
        return {
          ...state,
          verify_email: payload
        }
      case 'SENDEMAIL_VERIFYCODE':
        return {
          ...state,
          sendmail_verifycode: payload
        }
      default:
        return state;
    }
  }
  
  export default authReducer;
  