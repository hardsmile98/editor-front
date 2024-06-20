import tagTypes from '../tagTypes';

interface GetModuleResponse {
  success: boolean
  module: {
    isFilled: boolean
    index: number
    type: string
    schoolUuid: string
    moduleId: number
    settings: unknown
    parentId: number
  }
}

const getModule = {
  query: ({ uuid, moduleId }: { uuid: string, moduleId: string }) => ({
    url: '/api/modules',
    params: {
      uuid,
      moduleId,
    },
  }),

  providesTags: [tagTypes.schoolModule],
};

export {
  getModule,
  type GetModuleResponse,
};
