// import { LoginFormProps } from '../ducks/contracts';

export const AuthApi = {
  verify(payload: any): Promise<any> {
    // const phone = new FormData();
    // phone.append('phone', payload);
    const details = {
      phone: payload,
    };
    let formBody: any = [];
    for (const property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    }
    formBody = formBody.join('&');
    const data = fetch('https://api.rentup.cy/json?func=mobile&action=sendSms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
    });
    return data.then(response => response.json());
  },
  signIn(postData: any): Promise<any> {
    console.log(postData);
    let formBody: any = [];
    for (const property in postData) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(postData[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    }
    formBody = formBody.join('&');
    const data = fetch('https://api.rentup.cy/json?func=mobile&action=getUserByCode', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: formBody,
    });
    return data.then(response => response.json());
  },
  logIn(token: any): any {
    const data = fetch('/api/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    return data.then(response => response.json());
  },
  signUp(postData: any): Promise<any> {
    let formBody: any = [];
    for (const property in postData) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(postData[property]);
      formBody.push(`${encodedKey}=${encodedValue}`);
    }
    formBody = formBody.join('&');
    const data = fetch('https://api.rentup.cy/json?func=web&action=create_user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: formBody,
    });
    return data.then(response => response.json());
  },
  getMe(token: string): Promise<any> {
    const data = fetch(`https://api.rentup.cy/json?func=web&action=getUserByToken?token=${token}`);
    return data.then(response => response.json());
  },
  logOut(): any {
    const data = fetch('/api/logout', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    });
    return data.then(response => response.json());
  },
};
