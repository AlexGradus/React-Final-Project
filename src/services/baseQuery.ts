import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import store from 'store';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://final-task-backend-production-c2d6.up.railway.app/',
  prepareHeaders: (headers, { getState }) => {
    const { user } = (getState() as ReturnType<typeof store.getState>).app;
    if (user) {
      headers.set('authorization', `Bearer ${user.token}`);
      sessionStorage.setItem('tokenData', JSON.stringify(user.token));
    }
    return headers;
  },
});
