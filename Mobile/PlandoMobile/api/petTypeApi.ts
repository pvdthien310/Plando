import DatabaseClient from './coreApi';

const baseURL = 'petType';

const petTypeApi = {
  getAll: async () => {
    const res = await DatabaseClient.get('/' + baseURL).catch((err) => {
      return err.response;
    });
    return res;
  }
};
export default petTypeApi;
