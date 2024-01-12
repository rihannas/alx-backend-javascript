import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Exporting the handleProfileSignup function
export function handleProfileSignup(firstName, lastName, fileName) {
  // Call the signUpUser and uploadPhoto functions with the provided arguments
  const userPromise = signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, photoPromise]).then((response) => {
    console.log(response);
  });
}
