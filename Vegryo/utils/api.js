import axios from "axios";

export const getAllVeggies = async () => {
  const { data } = await axios.get(
    "https://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/crops"
  );

  return data;
};

export const postNewUser = async body => {
  const { data } = await axios.post(
    "https://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/users/",
    body
  );

  return data;
};

export const patchToUser = async body => {
  const { data } = await axios.patch(
    "https://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/Users/Old McDonald",
    body
  );
  return data;
};

export const getUserByID = async () => {
  const { data } = await axios.get(
    "https://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/Users/Old McDonald"
  );
  return data;
};
