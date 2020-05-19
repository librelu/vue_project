import axios from 'axios'

export default {
  async getUserProfile({ commit }, { token }) {
    const url = `http://localhost:8000/get-user-profile`
    const { data } = axios({
      method: 'GET',
      url,
      'Content-Type': 'application/json',
      Authentication: token
    }).catch((err) => {
      console.log(err)
      commit('setUserProfile', {
        username: 'Lucas',
        email: 'example@example.com',
        phoneNo: '0988765432',
        Gender: 'Male',
        Birthday: '1999-10-10'
      })
    })
    await commit('setUserProfile', data.result)
  }
}
