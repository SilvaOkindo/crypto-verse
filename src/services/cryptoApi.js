import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const headers = {
  "X-RapidAPI-Key": "c41361331amsh8b81a3725ef3d4ep10aaa4jsn7ffb4feb70a0",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const params = {
  referenceCurrencyUuid: "yhjMzLPhuIDl",
  timePeriod: "24h",
  "tiers[0]": "1",
  orderBy: "marketCap",
  orderDirection: "desc",
  limit: `50`,
  offset: "0",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url) => ({ url, headers });

// Function to convert params object to query string
// const createQueryString = (params) => 
//   Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?${params.referenceCurrencyUuid}&${params.timePeriod}&${params["tiers[0]"]}&${params.orderBy}&${params.orderDirection}&limit=${count}&${params.offset}`),
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi
