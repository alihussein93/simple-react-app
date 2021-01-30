import moment from 'moment';

const config = {
  date: true,
  delimiter: '-',
  datePattern: ['d', 'm', 'Y'],
  dateMax: moment().format('YYYY-MM-DD'),
  dateMin: moment().subtract(100, 'years').format('YYYY-MM-DD')
};

export default config;
