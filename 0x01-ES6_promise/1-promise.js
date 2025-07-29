export default function getFullResponseFromAPI(success) {
  if (success) {
    const myObj = {
      status: 200,
      body: 'Success',
    };
    return Promise.resolve(myObj);
  } else {
    return Promise.reject(new Error('The fake API is not working currently'));
  }
}
