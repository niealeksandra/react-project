import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserInterface } from '../components/user/userData.interface'

type Users = {
  results: UserInterface[]
  info: any[];
}

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/' }),
  endpoints: (builder) => ({
    getUsers: builder.query<Users, void>({
      query: () => `api/`,
    }),
  }),
})

export const { useGetUsersQuery } = usersApi