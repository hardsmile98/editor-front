interface GetModulesResponse {
  success: boolean
  modules: Array<{
    id: number
    slug: string
    title: string
    hint: string
  }>
}

const getModules = {
  query: () => ({
    url: '/api/modules/all',
  }),
};

export {
  getModules,
  type GetModulesResponse,
};
