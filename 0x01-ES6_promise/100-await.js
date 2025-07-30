import * as utils from './utils';

export default async function asyncUploadUser() {
  const responseFromUploadPhoto = await utils.uploadPhoto();
  const responseFromCreateUser = await utils.createUser();
  return {
    photo: responseFromUploadPhoto,
    user: responseFromCreateUser,
  };
}
