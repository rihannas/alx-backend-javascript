// eslint-disable-next-line import/prefer-default-export
function getFullResponseFromAPI(sucess) {
  return new Promise((resolve, reject) => {
    if (sucess) {
      resolve({ status: 200, body: 'sucess' });
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

console.log(getFullResponseFromAPI(true));
console.log(getFullResponseFromAPI(false));
