import DatabaseClient from './coreApi';

const baseURL = 'meal';

const mealApi = {
  getAll: async () => {
    const res = await DatabaseClient.get('/' + baseURL).catch((err) => {
      return err.response;
    });
    return res;
  }
};
export default mealApi;
