export default function handleResponseFromAPI(promise) {
  const myPromise = new Promise((resolve, reject) => {
    promise
      .then(() => {
        console.log('Got a response from the API');
        resolve({ status: 200, body: 'Success' });
      })
      .catch(() => {
        reject(new Error());
      });
  });

  return myPromise;
}
