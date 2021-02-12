import moment from 'moment';

class Dates {
  toHumanReadable(date) {
    return moment(date).format('YYYY-MM-DD');
  }

  currentTime() {
    return moment().unix();
  }

  getTimeAfterOneHour() {
    return moment().add('1', 'hours').unix();
  }
}

export default new Dates();
