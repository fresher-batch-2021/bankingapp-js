class Validator {

    static isValidString(input, message) {
      if ( input == null || input.trim() == "" ) {
        throw new Error(message);
      }
    }
  
  
    static isValidEmail(input, message) {
      if ( input == null || input.trim() == "" ) {
        throw new Error(message);
      }
    }
    static isValidPassword(input, message) {
        this.isValidString(input,"password can't empty")
        if (input.length < 8 || input.length > 15) {
          throw new Error(message);
        }
      }

  }