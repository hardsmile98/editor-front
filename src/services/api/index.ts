import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { envs } from 'constants/index';
import tagTypes from './tagTypes';
import * as endpoints from './endpoints';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: envs.apiUrl,
    prepareHeaders(headers) {
      const tgData = localStorage.getItem('tgData');

      if (tgData !== null) {
        headers.set('X-Telegram-Data', tgData);
      }

      return headers;
    },
    credentials: 'include',
  }),

  endpoints: (builder) => ({
    getProfile: builder.query<endpoints.ProfileResponse, undefined>(endpoints.getProfile),
    getSchools: builder.query<endpoints.SchoolsResponse, undefined>(endpoints.getSchools),
    addSchool: builder.mutation(endpoints.addSchool),
    getModules: builder.query<endpoints.GetModulesResponse, undefined>(endpoints.getModules),
    getModulesSelected: builder
      .query<endpoints.GetModulesSelectedResponse, { uuid: string }>(endpoints.getModulesSelected),
    addModule: builder.mutation(endpoints.addModule),
    editPositionModules: builder.mutation(endpoints.editPositionModules),
    getModule: builder
      .query<endpoints.GetModuleResponse, { uuid: string, moduleId: string }>(endpoints.getModule),
  }),

  tagTypes: Object.values(tagTypes),
});

export const {
  useGetProfileQuery,
  useGetSchoolsQuery,
  useAddSchoolMutation,
  useGetModulesQuery,
  useGetModulesSelectedQuery,
  useAddModuleMutation,
  useEditPositionModulesMutation,
  useGetModuleQuery,
} = publicApi;

export function isErrorWithMessage(
  error: unknown,
): error is { data: { message: Array<string> | string } } {
  return (
    typeof error === 'object'
    && error != null
    && (typeof (error as any).data?.message === 'string' || Array.isArray((error as any).data?.message))

  );
}

export function getErrorMessage(error: unknown): string {
  const errorMessage = (isErrorWithMessage(error)
    && ((typeof error.data.message === 'string' && error.data.message)
    || (Array.isArray(error.data.message) && error.data.message.join('')))) || '';
  return errorMessage;
}

export * from './endpoints';
