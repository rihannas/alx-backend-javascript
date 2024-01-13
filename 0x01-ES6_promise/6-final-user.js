import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Exporting the handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the signUpUser and uploadPhoto functions with the provided arguments
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise]).then((results) => {
    // Map the results to the required structure
    const resultArray = [];
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        resultArray.push({ status: result.status, value: result.value });
      } else {
        resultArray.push({ status: result.status, value: `${result.reason}` });
      }
    });
    return resultArray;
  });
}
