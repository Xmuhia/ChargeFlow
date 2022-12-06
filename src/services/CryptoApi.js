import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '99f9d906cbmsh3b1db62fe29fed0p17efaajsnec55c06ea903',
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/coins';

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = ({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery ({baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins')
    })
  })
});

export const {
  useGetCryptosQuery,
} = cryptoApi;
