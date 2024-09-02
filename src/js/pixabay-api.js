import axios from 'axios';

const API_KEY = '45696629-91516db15d2f4b6ea4d0928dd';
const BASE_URL = 'https://pixabay.com/api/';

export default async function fetchImages(query, page = 1) {
  try {
    const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data
} catch (error) {
    iziToast.error({
      position: "topRight",
        message: `${error}`,
    })
  }
}