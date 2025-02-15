import axios from 'axios';

const BaseUrl = 'https://newsapi.org/v2';
const ApiKey = '183daca270264bad86fc5b72972fb82a';

const getNews = async (query?: string) => {
  const response = await axios.get(`${BaseUrl}/top-headlines`, {
    params: {
      category: 'technology',
      apiKey: ApiKey,
      q: query,
    },
  });
  return response.data;
};

export { getNews };