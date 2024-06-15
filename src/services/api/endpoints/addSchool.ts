import tagTypes from '../tagTypes';

interface AddSchoolDto {
  token: string
  title: string
  direction: string
}

const addSchool = {
  query: (dto: AddSchoolDto) => ({
    url: '/api/schools/add',
    method: 'POST',
    body: dto,
  }),

  invalidatesTags: [tagTypes.schools],
};

export {
  addSchool,
};
