import env from 'react-dotenv';

const apiUrl = 'https://api.api-ninjas.com/v1/planets';
const apiKey = env.API_KEY;

const apiRequest = async (params) => {
  const fetchData = async () => {
    const response = await fetch(`${apiUrl}?${params}`, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  };
  const fetched = await fetchData();
  return fetched;
};

export default apiRequest;
