import { UserInterface } from "./userData.interface";

type UserProps = {
    user?: UserInterface;
}

const User = ({ user }: UserProps) => {
  return (
    <div>
        <h1>{user?.name.first}</h1>
    </div>
  );
}

export default User;
