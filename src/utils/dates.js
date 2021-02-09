import moment from 'moment';

class Dates {
  toHumanReadable(date) {
    return moment(date).format('YYYY-MM-DD');
  }
}

export default new Dates();
