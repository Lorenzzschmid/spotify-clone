import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e98e10fccbmsh557b9ed4ce7959ap19e80ajsnf45e054416a6",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

  export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: () => {
            headers.set('X-RapidAPI-Key', 'e98e10fccbmsh557b9ed4ce7959ap19e80ajsnf45e054416a6')
        }
    })
  })