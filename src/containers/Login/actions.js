import Events from './events';

export const authenticateUser = ({ _id: id, accessToken, refreshToken }) => ({
  type: Events.AUTHENTICATE_USER,
  accessToken,
  refreshToken
});
