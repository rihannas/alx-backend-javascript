import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  // Use Promise.all to collectively resolve promises
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      // Extract information from resolved promises
      const { body: photoBody } = photoResult;
      const { firstName, lastName } = userResult;

      // Log the extracted information to the console
      console.log(`${photoBody} ${firstName} ${lastName}`);
    })
    .catch(() => {
      // Log an error message if there is an issue
      console.log('Signup system offline');
    });
}
