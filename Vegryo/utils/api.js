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

export const getWeather = async () => {
  const { data } = await axios.get(
    "http://api.openweathermap.org/data/2.5/weather?q=Leeds,uk&APPID=dd243f07a1e18750d6c508a09806ddf4"
  );
  return data;
};

export const getUserbyID = async () => {
  const { data } = await axios.get(
    "https://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/users/Old%20McDonald"
  );
  return data;
};

export const getPicturebyId = async vegetable => {
  const { data } = await axios.get(
    `http://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/vegetableimages/${vegetable}`
  );
  return data.address;
};
