import axios from 'axios'

export const getAllVeggies = async () => {
  const { data } = await axios.get("https://us-central1-test-push-notifications-7e737.cloudfunctions.net/vegryo/api/crops")

  return data
}