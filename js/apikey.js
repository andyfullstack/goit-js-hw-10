const URL_API = 'https://api.thecatapi.com/v1';

const Cat_API =
  'live_Gg0X5s46NxE0NDeo00KhaMRkEOJ1kTJIycWcsk1FIZEYGUTozwpEmlLMKOoek2ab';

export function fetchBreeds() {
  return fetch(`${URL_API}/breeds?api_key=${Cat_API}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText || response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${URL_API}/images/search?breed_ids=${breedId}&api_key=${Cat_API}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText || response.status);
    }
    return response.json();
  });
}
