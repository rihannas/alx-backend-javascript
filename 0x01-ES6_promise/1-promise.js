export default function getFullResponseFromAPI(sucess) {
  return new Promise((resolve, reject) => {
    if (sucess) {
      resolve({ status: 200, body: 'sucess' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
