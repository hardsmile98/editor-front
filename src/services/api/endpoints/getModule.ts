import tagTypes from '../tagTypes';

interface GetModuleResponse {
  success: boolean
  module: {
    isFilled: boolean
    index: number
    type: string
    schoolUuid: string
    moduleId: number
    settings: {
      properties: Record<string, Record<string, string | number>>
      visibleProperties: Array<string>
    }
    parentId: number
  }
}

type Settings = GetModuleResponse['module']['settings'];

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
  type Settings,
};
