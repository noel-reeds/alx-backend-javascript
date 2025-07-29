export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      const myObj = {
        status: 200,
        body: 'Success',
      };
      return myObj;
    }).catch(() => new Error()).finally(() => console.log('Got a response from the API'));
}
