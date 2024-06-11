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
    getProfile: builder.query(endpoints.getProfile),
  }),

  tagTypes: Object.values(tagTypes),
});

export const {
  useGetProfileQuery,
} = publicApi;

export function isErrorWithMessage(
  error: unknown,
): error is { data: { message: string } } {
  return (
    typeof error === 'object'
    && error != null
    && typeof (error as any).data?.message === 'string'
  );
}

export * from './endpoints';