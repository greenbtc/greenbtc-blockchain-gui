import { createApi } from '@reduxjs/toolkit/query/react';

import baseQuery from './greenbtcLazyBaseQuery';

export { baseQuery };

export default createApi({
  reducerPath: 'greenbtcApi',
  baseQuery,
  endpoints: () => ({}),
});
