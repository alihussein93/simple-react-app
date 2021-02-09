import Dates from 'utils/dates';

class Utils {
  // check if object is empty
  isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
  }

  // clean user profile info
  cleanUserInfo(data) {
    const {
      firstName,
      lastName,
      email,
      dob,
      createdAt,
      isActive,
      isAdmin,
      updatedAt,
      _key
    } = data;
    return {
      firstName,
      lastName,
      email,
      dob,
      createdAt: Dates.toHumanReadable(createdAt),
      isActive: isActive ? 'yes' : 'no',
      isAdmin,
      updatedAt: Dates.toHumanReadable(updatedAt),
      id: _key
    };
  }
}

export default new Utils();
