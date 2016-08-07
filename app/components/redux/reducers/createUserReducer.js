const initialState = {
  user: null,
  isRequestingUser: false,
  isCreatingUser: false,
  token: null,
  error: null
}

const userCreateStart = state => ({
  ...state,
  isCreatingUser: true
})

const userReducer = (state = initialState, action) => ({
  switch (action.type) {
    case 'CREATE_USER_START': return userCreateStart(state)
    default: return state
  }
})