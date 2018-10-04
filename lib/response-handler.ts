
export class ResponseHandler {

  public static resolve <T> (value: T, resolve: (response: T) => void, callback?: (error: any, response: T) => void) {
    resolve(value);

    if (typeof callback === 'function') {
      callback(null, value);
    }
  }


  public static reject <T> (value: T, reject: (error: T) => void, callback?: (error: T, response?: any) => void) {
    reject(value);

    if (typeof callback === 'function') {
      callback(value);
    }
  }

};
