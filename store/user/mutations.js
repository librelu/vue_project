export default {
  setUserProfile(state, payload) {
    state.username = payload.Username
    state.email = payload.Email
    state.phoneNo = payload.PhoneNo
    state.Gender = payload.Gender
    state.Birthday = payload.Birthday
  }
}
