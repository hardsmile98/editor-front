import tagTypes from '../tagTypes'

const getProfile = {
  query: () => ({
    url: '/api/profle/me',
    method: 'get'
  }),

  provideTags: [tagTypes.profile]
}

export {
  getProfile
}
