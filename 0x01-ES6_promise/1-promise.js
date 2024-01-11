// eslint-disable-next-line import/prefer-default-export
export default function getFullResponseFromAPI(sucess) {
  return new Promise((resolve, reject) => {
    if (sucess) {
      resolve({ status: 200, body: 'Sucess' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
