import "./Profile.css";

const Profile = ({ name = "John Doe", age = "??", country = "Japan"}) => {
  return (
    <div className="profile">
      <h3>Name：{name}</h3>
      <h3>Name：{age}</h3>
      <h3>Name：{country}</h3>
    </div>
  );
};


export default Profile;
