const initialState =
  {
    loggedIn: false,
    loggingIn: false,
    signingUp: false
  }
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case '@@router/LOCATION_CHANGE':
      if (action.payload.pathname === '/login') {
        return {
          ...state,
          loginError: undefined,
          loggingIn: false,
          signingUp: false,
          loginRedirect: action.payload.query.redirect
        };
      }
      return state;
    case 'USER_LOGIN_PENDING':
      return {
        ...state,
        loggingIn: true,
        signingUp: false,
        loginError: undefined
      }
    case 'USER_LOGIN_REJECTED':
      return {
        ...state,
        loggingIn: false,
        loginError: action.payload.message
      }
    case 'USER_LOGIN_FULFILLED':
      const loadedObject = {
        username: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        emailAddressVerified: false
      }
      action.payload.forEach(function (attribute) {
        switch (attribute.Name) {
          case 'name':
            loadedObject.firstName = attribute.Value;
            break;
          case 'family_name':
            loadedObject.lastName = attribute.Value;
            break;
          case 'email':
            loadedObject.emailAddress = attribute.Value;
            break;
          case 'email_verified':
            loadedObject.emailAddressVerified = attribute.Value === 'true';
            break;
          case 'username':
            loadedObject.username = attribute.Value;
            break;
          
          default:
            break;
        }
      }, this);
      return {
        ...state,
        loggedIn: true,
        loggingIn: false,
        username: loadedObject.username,
        firstName: loadedObject.firstName,
        lastName: loadedObject.lastName,
        emailAddress: loadedObject.emailAddress,
        emailAddressVerified: loadedObject.emailAddressVerified,
        loginRedirect: undefined,
        loginError: undefined
      }
    case 'USER_LOGOUT_FULFILLED':
      return {
        ...state,
        loggedIn: false,
        loggingIn: false,
        signingUp: false,
        username: undefined,
        firstName: undefined,
        lastName: undefined,
        emailAddress: undefined,
        emailAddressVerified: undefined
      }
    case 'USER_CURRENT_PENDING':
      return {
        ...state,
        loading: true
      }
    case 'USER_CURRENT_FULFILLED':
      if (action.payload && action.payload.length > 0) {
        const loadedObject = {
          username: '',
          firstName: '',
          lastName: '',
          emailAddress: '',
          emailAddressVerified: false
        }
        action.payload.forEach(function (attribute) {
          switch (attribute.Name) {
            case 'name':
              loadedObject.firstName = attribute.Value;
              break;
            case 'family_name':
              loadedObject.lastName = attribute.Value;
              break;
            case 'email':
              loadedObject.emailAddress = attribute.Value;
              break;
            case 'email_verified':
              loadedObject.emailAddressVerified = attribute.Value === "true";
              break;
            case 'username':
              loadedObject.username = attribute.Value;
              break;            
            default:
              break;
          }
        }, this);

        return {
          ...state,
          loading: false,
          loggedIn: true,
          username: loadedObject.username,
          firstName: loadedObject.firstName,
          lastName: loadedObject.lastName,
          emailAddress: loadedObject.emailAddress,
          emailAddressVerified: loadedObject.emailAddressVerified
        }
      } else {
        return {
          ...state,
          loading: false,
          username: undefined,
          firstName: undefined,
          lastName: undefined,
          emailAddress: undefined,
          emailAddressVerified: undefined
        }
      }
    case 'USER_CURRENT_REJECTED':
      return {
        ...state,
        loading: false,
        loadingError: action.payload.message
      }
    default:
      return state;
  }
}