import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([dataPhoto, dataUser]) => {
      console.log(`${dataPhoto.body} ${dataUser.firstName} ${dataUser.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
