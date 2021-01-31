const enums = {
  locales: {
    en_US: 'en-US'
  },
  authStatuses: {
    NONE: 'NONE',
    LOADED: 'LOADED',
    AUTHENTICATED: 'AUTHENTICATED',
    UNAUTHENTICATED: 'UNAUTHENTICATED'
  },
  defaultValidations: {
    name: {
      maxLength: 40
    },
    email: {
      maxLength: 80
    },
    password: {
      minLength: 8
    }
  }
};

export default enums;
