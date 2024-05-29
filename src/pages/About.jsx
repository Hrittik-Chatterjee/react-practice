import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="avatar">
        <div className="w-12 rounded-full border-2 border-black">
          <img src={user?.photoURL || "/public/placeholder.jpg"} />
        </div>
      </div>
      <h1>{user?.displayName || "Username"}</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default Dashboard;
