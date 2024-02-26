import { StateCreator, create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import fetch from '../services/fetchService';

interface IRequest {
  url: string;
  method: string;
  data?: any;
  auth?: any;
}
export interface IClientFetchStore {
  isLoading: boolean;
  error: string;
  data: any;
  sendRequest: ({ url, method, data, auth }: IRequest) => void;
}

interface IInitState {
  isLoading: boolean;
  error: string;
  data: any;
}

const INIT_STATE: IInitState = {
  isLoading: false,
  error: '',
  data: {},
};

const myMiddlewares = (f: StateCreator<IClientFetchStore>) =>
  persist(f, {
    name: 'clientFetchStore',
    storage: createJSONStorage(() => localStorage),
  });

export const useClientFetch = create<IClientFetchStore>()(
  myMiddlewares((set, _get) => ({
    ...INIT_STATE,
    sendRequest: async ({ url, method, data, auth }) => {
      set(() => ({ isLoading: true }));
      const response = await fetch.app({ url, method, data, auth });
      set(() => ({
        isLoading: false,
        error: response.message || '',
        data: response,
      }));
    },
  }))
);
