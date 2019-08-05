import axios from "axios";
import APIKEY from "../screens/config";

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
export const getWeather = async () => {
  const { data } = await axios.get(
    `http://api.openweathermap.org/data/2.5/weather?q=Leeds,uk&APPID=${APIKEY}`
  );
  return data;
};

export const getUserbyID = async () => {
  const { data } = await axios.get(
    "https://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/users/Old%20McDonald"
  );

  return data;
};
