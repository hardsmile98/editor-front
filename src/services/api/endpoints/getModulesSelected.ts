import tagTypes from '../tagTypes';

interface GetModulesSelectedResponse {
  success: boolean
  schoolModules: Array<{
    isFilled: boolean
    index: number
    type: string
    schoolUuid: string
    moduleId: number
    settings: unknown
    parentId: number
    module: {
      id: number
      slug: string
      title: string
      hint: string
    }
  }>
}

const getModulesSelected = {
  query: ({ uuid }: { uuid: string }) => ({
    url: '/api/modules/selected',
    params: {
      uuid,
    },
  }),

  providesTags: [tagTypes.schoolModules],
};

export {
  getModulesSelected,
  type GetModulesSelectedResponse,
};
