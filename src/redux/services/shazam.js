// import{ createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
// export const shazamCoreApi = createApi ({
//     reducerPath: 'shazamCoreApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl:'https://shazam-core.p.rapidapi.com/v1',
//         prepareHeaders: (headers) =>{
//             headers.set('x-rapidapi-key','264f89e7f5mshdd333412740e15dp1810c9jsnb2c94b728b36');
            
//             return headers;
//          },
//     }),
//     endpoints: (buider) => ({
//         getTopCharts: buider.query({query:()=> '/charts/world'}),

//     }),
// });
// export const {useGetTopChartsQuery,} = shazamCoreApi

//ChatGPT

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: (headers) => {
      headers.set('x-rapidapi-key', '264f89e7f5mshdd333412740e15dp1810c9jsnb2c94b728b36');
      headers.set('x-rapidapi-host', 'shazam-core.p.rapidapi.com');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => '/charts/world?country_code=DZ',
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
