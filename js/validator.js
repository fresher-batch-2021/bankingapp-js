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
        this.isValidString(input,"Password can't be Blank")
        if (input.length < 8 || input.length > 15) {
          throw new Error(message);
        }
      }
      static isValidMobile(input, message) {
    
        if (input.length != 10) {
          throw new Error(message);
        }
      }

  }