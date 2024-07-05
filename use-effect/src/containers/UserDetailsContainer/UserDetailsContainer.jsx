import { useEffect, useState } from "react";
import { fetchRandomUser } from "../../services/user-services";
import UserCard from "../../components/UserCard/UserCard";
import Message from "../../components/Message/Message";

const UserDetailsContainer = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const [fetchStatus, setFetchStatus] = useState("");
  useEffect(() => {
    setFetchStatus("LOADING");
    fetchRandomUser()
      .then((data) => {
        setFetchStatus("SUCCESS");
        setUserDetails(data);
      })
      .catch((e) => {
        setFetchStatus("FAILURE");
        setError(e);
      });
  }, []);

  return (
    <>
      {fetchStatus === "LOADING" && <p>Loading...</p>}
      {fetchStatus === "SUCCESS" && <UserCard userDetails={userDetails} />}
      {fetchStatus === "FAILURE" && (
        <Message message="oops something went wrong" variant="danger" />
      )}
    </>
  );
};
export default UserDetailsContainer;
