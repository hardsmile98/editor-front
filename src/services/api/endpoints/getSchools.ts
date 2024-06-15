import tagTypes from '../tagTypes';

interface SchoolsResponse {
  success: boolean
  schools: Array<{
    uuid: string
    token: string
    title: string
    direction: string
    createdAt: string
    updatedAt: string
  }>
}

const getSchools = {
  query: () => ({
    url: '/api/schools',
  }),

  providesTags: [tagTypes.schools],
};

export {
  getSchools,
  type SchoolsResponse,
};
