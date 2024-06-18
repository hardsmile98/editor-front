import tagTypes from '../tagTypes';

interface AddModuleDto {
  schoolUuid: string
  moduleId: number
}

const addModule = {
  query: (dto: AddModuleDto) => ({
    url: '/api/modules/addModule',
    method: 'POST',
    body: dto,
  }),

  invalidatesTags: [tagTypes.schoolModules],
};

export {
  addModule,
};
