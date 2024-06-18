import tagTypes from '../tagTypes';

interface EditPositionModulesDto {
  schoolUuid: string
  editedModules: Array<{
    moduleId: number
    index: number
  }>
}

const editPositionModules = {
  query: (dto: EditPositionModulesDto) => ({
    url: '/api/modules/editPosition',
    method: 'POST',
    body: dto,
  }),

  invalidatesTags: [tagTypes.schoolModules],
};

export {
  editPositionModules,
};
