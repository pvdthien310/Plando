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
    console.log(data)
    const res = await DatabaseClient.post('/' + baseURL, data).catch((err) => {
      return err.response;
    });
    return res;
  }
};
export default todoApi;
