import * as utils from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await utils.uploadPhoto();
    const user = await utils.createUser();
    return { photo, user };
  } catch (e) {
    return {
      user: null,
      photo: null,
    };
  }
}
