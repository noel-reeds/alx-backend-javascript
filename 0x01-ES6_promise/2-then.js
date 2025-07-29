export default function handleResponseFromAPI(promise) {
  promise
    .then((res, rej) => {
      const myObj = {
        status: 200,
        body: 'Success',
      };
      res(myObj);
    }).catch(() => new Error()).finally(() => console.log('Got a response from the API'));
}
