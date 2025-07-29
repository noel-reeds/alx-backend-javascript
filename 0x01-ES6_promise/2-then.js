export default function handleResponseFromAPI(promise) {
  promise
    .then(() => {
      const myObj = {
        status: 200,
        body: 'Success',
      };
      console.log('Got a response from the API');
      return myObj;
    }).catch(() => new Error());
}
