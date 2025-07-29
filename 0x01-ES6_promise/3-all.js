import * as utils from './utils';

export default function handleProfileSignup() {
  const promise = Promise.all([utils.uploadPhoto(), utils.createUser()]);
  promise.then((attrs) => {
    console.log(`${attrs[0].body} ${attrs[1].firstName} ${attrs[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
