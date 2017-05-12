import axios from 'axios';


const authorizeUser = async () => {

  const token = window.localStorage.getItem('jwt') || null;

  if (token === null) {
    return null;
  }

  let request;

  try {
    request = await axios.get('/authorize', {
      headers: {
        'Bearer': token
      }
    });
  } catch (error) {
    console.log(error);
    return;
  }

  return request.data.user;

};


module.exports = authorizeUser;
