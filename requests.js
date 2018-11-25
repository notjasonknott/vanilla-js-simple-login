/**
*
* EasyHTTP Library
* Library for making HTTP requests
*
* @version 2.0.0
* @author Jason Knott
* @license JKM
*
**/

class Requests {

  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }
  
  async login(url, user) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(user)}`,
        'Content-type': 'application/json'
      }
    });
    const resData = await response.json();
    return resData;  
  }

}