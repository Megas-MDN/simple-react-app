import axios, { AxiosHeaders } from 'axios';

const baseAuth = (auth: AxiosHeaders | {} = {}) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      ...auth,
    },
  };
};

const app = async ({ method = 'GET', url = '', data = {}, auth = {} } = {}) => {
  const nAuth = baseAuth(auth);
  try {
    const response = await axios({
      method,
      url: url,
      data,
      ...nAuth,
    });

    return response.data;
  } catch (error) {
    return { message: error.message, error: true };
  }
};

const get = async ({ url = '', data = {}, auth = {} } = {}) =>
  app({ method: 'GET', url, data, auth });

const remove = async ({ url = '', data = {}, auth = {} }) =>
  app({ method: 'DELETE', url, data, auth });

const put = async ({ url = '', data = {}, auth = {} }) => {
  return app({
    method: 'PUT',
    url,
    data,
    auth,
  });
};

const post = async ({ url = '', data = {}, auth = {} }) =>
  app({
    method: 'POST',
    url,
    data,
    auth,
  });

export default { get, remove, put, post, app };
