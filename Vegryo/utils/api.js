import axios from 'axios'

export const getAllVeggies = async () => {
  const { data } = await axios.get("https://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/crops")

  return data
}

export const postNewUser = async (body) => {
  const { data } = await axios.post('https://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/users/', body)

  return data
}