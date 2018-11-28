import {httpPost,httpGet} from '../../common/HttpBean'
// import userStore from '../stores/UserStore'

export function onLogin() {
  function callback(data) {
    console.log(data);
  };
  // httpPost('/api/TokenAuth/Authenticate', {
  //   userNameOrEmailAddress: "123@163.COM",
  //   password: "123456",
  //   rememberClient: true
  // }, callback);

  httpGet('/api/services/app/User/Get?Id=3',callback);
};
