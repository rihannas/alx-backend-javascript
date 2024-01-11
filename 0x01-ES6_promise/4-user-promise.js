export default function signUpUser(firstName, lastName) {
  const myObject = {
    firstName: firstName,
    lastName: lastName,
  };

  // Returning a Promise that is resolved with the object
  return Promise.resolve(myObject);
}
