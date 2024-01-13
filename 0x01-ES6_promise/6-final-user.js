import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

// Exporting the handleProfileSignup function
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Call the signUpUser and uploadPhoto functions with the provided arguments
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise]).then((results) => {
    // Map the results to the required structure
    return results.map((result) => ({
      status: result.status,
      value: result.status === 'fulfilled' ? result.value : result.reason,
    }));
  });
}
