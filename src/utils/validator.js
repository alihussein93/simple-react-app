import Enums from 'constants/enums';

class Index {
  isEmpty(string) {
    return !string;
  }

  isNumeric(string) {
    const regEx = /\d/;
    return regEx.test(string);
  }

  isContainSingleAt = (email) => {
    const regEx = /^((?!@).)*$/;
    return regEx.test(email);
  };

  isInvalidDomain = (string) => {
    const regEx = /(\S)(?=\s*$)/;
    return string.match(regEx)[1] === '@';
  };

  isInvalidEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !regEx.test(email);
  };

  isContainSpecialCharacters(string) {
    const regEx = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
    return regEx.test(string);
  }

  isLowerCase(string) {
    const regEx = /[a-z]/;
    return regEx.test(string);
  }

  isUpperCase(string) {
    const regEx = /[A-Z]/;
    return regEx.test(string);
  }

  isEnglish(string) {
    const regEx = /^[A-Za-z0-9 ]*$/;
    return regEx.test(string);
  }

  isAboveMaxLength(string, maxLength) {
    return string.length > maxLength;
  }

  isBelowMinLength(string, minLength) {
    return string.length < minLength;
  }

  isContainLowerCase(string) {
    const regEx = /(?=.*[a-z])/;
    return !regEx.test(string);
  }

  isContainUpperCase(string) {
    const regEx = /(?=.*[A-Z])/;
    return !regEx.test(string);
  }

  isContainOneNumber(string) {
    const regEx = /(?=.*[0-9])/;
    return !regEx.test(string);
  }

  isDateInvalid(date) {
    return date.includes('0000') || date.length < 10;
  }

  get emptyMessage() {
    return 'app.error.required';
  }

  get singleAtMessage() {
    return 'app.error.singleAt';
  }

  get invalidDomainMessage() {
    return 'app.error.invalidDomain';
  }

  get invalidEmailMessage() {
    return 'app.error.invalidEmail';
  }

  get hasNumberMessage() {
    return 'app.error.noNumbers';
  }

  get containSpecialCharactersMessage() {
    return 'app.error.noSpecialCharacters';
  }

  get isEnglishMessage() {
    return 'app.error.noForeignCharacters';
  }

  get maxLengthMessage() {
    return 'app.error.maxLength';
  }

  get minLengthMessage() {
    return 'app.error.minLength';
  }

  get minPasswordLengthMessage() {
    return 'app.error.password.minLength';
  }

  get containLowerCaseMessage() {
    return 'app.error.password.lowerCase';
  }

  get containUpperCaseMessage() {
    return 'app.error.password.upperCase';
  }

  get containOneNumberMessage() {
    return 'app.error.password.numeric';
  }

  get invalidDateMessage() {
    return 'app.error.date.invalid';
  }

  checkFormField(value, checklist) {
    const {
      notEmpty,
      notNumeric,
      notForiegn,
      notSpecial,
      maxLength,
      minLength
    } = checklist;
    let error = '';
    if (notEmpty && this.isEmpty(value)) {
      error = this.emptyMessage;
      return error;
    }
    if (notNumeric && this.isNumeric(value)) {
      error = this.hasNumberMessage;
      return error;
    }
    if (notForiegn && !this.isEnglish(value)) {
      error = this.isEnglishMessage;
      return error;
    }
    if (notSpecial && this.isContainSpecialCharacters(value)) {
      error = this.containSpecialCharactersMessage;
      return error;
    }
    if (maxLength && this.isAboveMaxLength(value, maxLength)) {
      error = this.maxLengthMessage;
      return error;
    }
    if (minLength && value.length < minLength) {
      error = this.minLengthMessage;
      return error;
    }
    return error;
  }

  checkEmail(email) {
    let error = '';
    if (this.isEmpty(email)) {
      error = this.emptyMessage;
      return error;
    }
    if (this.isContainSingleAt(email)) {
      error = this.singleAtMessage;
      return error;
    }
    if (!this.isEmpty(email) && this.isInvalidDomain(email)) {
      error = this.invalidDomainMessage;
      return error;
    }
    if (this.isInvalidEmail(email)) {
      error = this.invalidEmailMessage;
      return error;
    }
    return error;
  }

  checkPassword(password) {
    let error = '';
    if (this.isEmpty(password)) {
      error = this.emptyMessage;
      return error;
    }
    if (
      this.isBelowMinLength(
        password,
        Enums.defaultValidations.password.minLength
      )
    ) {
      error = this.minPasswordLengthMessage;
      return error;
    }
    if (this.isContainLowerCase(password)) {
      error = this.containLowerCaseMessage;
      return error;
    }
    if (this.isContainUpperCase(password)) {
      error = this.containUpperCaseMessage;
      return error;
    }
    if (this.isContainOneNumber(password)) {
      error = this.containOneNumberMessage;
      return error;
    }
    return error;
  }

  checkLoginPassword(password) {
    let error = '';
    if (this.isEmpty(password)) {
      error = this.emptyMessage;
      return error;
    }
    return error;
  }

  checkDate(date) {
    let error = '';
    if (this.isEmpty(date)) {
      error = this.emptyMessage;
      return error;
    }
    if (this.isDateInvalid(date)) {
      error = this.invalidDateMessage;
      return error;
    }

    return error;
  }
}

export default new Index();
