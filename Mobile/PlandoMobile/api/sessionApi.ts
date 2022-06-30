import DatabaseClient from './coreApi';

const baseURL = 'session';

declare type session = {
  name?: string;
  accountId?: string;
};

const sessionApi = {
  addSession: async (data: session) => {
    console.log(data);
    const res = await DatabaseClient.post('/' + baseURL, data).catch((err) => {
      return err.response;
    });
    return res;
  }
};
export default sessionApi;
