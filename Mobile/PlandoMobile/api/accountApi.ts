import DatabaseClient from './coreApi';

const baseURL = 'account';

const accountApi = {
  login: async (data: Object) => {
    const res = await DatabaseClient.post(
      '/' + baseURL + '/sign-in',
      data
    ).catch((err) => {
      return err.response;
    });
    return res;
  },
  getAll: async (data: Object) => {
    const res = await DatabaseClient.get('/' + baseURL).catch((err) => {
      return err.response;
    });
    return res;
  },
  getById: async (userId: any) => {
    const res = await DatabaseClient.get('/' + baseURL + '/' + userId).catch(
      (err) => {
        return err.response;
      }
    );
    return res;
  }
};
export default accountApi;
