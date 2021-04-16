export const getRandom = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((body) => {
      console.log(body.drinks[0]);
      return body.drinks[0];
    })
    .catch((err) => console.error(`Failed to fetch, something went wrong -- ${err}`));
};
