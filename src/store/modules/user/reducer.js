const INITIAL_STATE = {
  profile: null
}

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'auth/SIGN_IN_SUCCESS': {
      return {
        ...state,
        profile: action.payload.user
      }
    }

    case 'user/UPDATE_PROFILE_SUCCESS': {
      return {
        profile: action.payload.profile
      }
    }

    case 'auth/SIGN_OUT': {
      return {
        profile: null
      }
    }

    default:
      return state
  }
}

export default user
