import DatabaseClient from './coreApi';

const baseURL = 'todo';

declare type todo = {
  title: string;
  body: string;
  start: Date;
  end: Date;
  point: Number;
  accountId?: string;
  sessionId?: string;
};

const todoApi = {
  addTodo: async (data: todo) => {
    const res = await DatabaseClient.post('/' + baseURL, data).catch((err) => {
      return err.response;
    });
    return res;
  },
  setDone: async (data: any) => {
    const res = await DatabaseClient.post(
      '/' + baseURL + '/set-done',
      data
    ).catch((err) => {
      return err.response;
    });
    return res;
  }
};
export default todoApi;
