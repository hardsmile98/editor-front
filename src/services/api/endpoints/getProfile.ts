import tagTypes from '../tagTypes';

interface ProfileResponse {
  success: boolean
  user: {
    userId: number
    name: string
    username: string
    limitShop: number
    createdAt: string
    updatedAt: string
  }
}

const getProfile = {
  query: () => ({
    url: '/api/users/owner',
    method: 'get',
  }),

  providesTags: [tagTypes.profile],
};

export {
  getProfile,
  type ProfileResponse,
};
