import axios from 'axios'
// import userStore from '../vuex/stores/UserStore'

const apiUrl = 'http://localhost:5000';
const auth = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjQxN2EwMmMwLWQxNWMtNmJkZS0wNjMyLTM5ZWE2NjY2NjM5ZCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6ImQ0YmM1YTI0LTYyMGItNDk4NC05ZmJlLTU1MWJiNTMxM2U4MyIsImlhdCI6MTU0MzM3OTk1MSwibmJmIjoxNTQzMzc5OTUxLCJleHAiOjE1NDM0NjYzNTEsImlzcyI6Ik5ldENvcmUyMDE5IiwiYXVkIjoiTmV0Q29yZTIwMTkifQ.0aTyicm_MB2I3dR6DhKUIBliJ_RhgmN2ckxbNXfPFjI';

export function httpPost(url, formObj, callback) {
  axios.post('/api' + url, formObj,
    {
      headers: {'Authorization': auth}
    })
    .then(function (res) {
      callback(res.data);
    })
    .catch(function (err) {
      console.log(err);
    })
};


export function httpGet(url, callback) {
  axios.get('/api' + url, {
    headers: {'Authorization': auth}
  }).then(function (res) {
    callback(res.data);
  })
    .catch(function (err) {
      console.log(err);
    })
};
