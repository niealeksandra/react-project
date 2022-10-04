import { useGetUsersQuery } from "../api/api";
import User from "../components/user/userData";

const Users = () => {
  const { data, error, isLoading } = useGetUsersQuery()

  return (
    <div>
      <h1>Hi! This is a random user, let's get to know him</h1>
      { isLoading ? 
        <p>loading</p> 
      : <>
          {data && data.results && data.results.length && (
            <User user={data.results[0]}/>
          )}
        </>
      }
    </div>
  );
}

export default Users;
