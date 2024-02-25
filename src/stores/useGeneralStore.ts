import { StateCreator, create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

export interface IGeneralStore {
  count: number;
  increase: (by: number) => void;
  decrease: (by: number) => void;
}
interface IInitState {
  count: number;
}
const INIT_STATE: IInitState = {
  count: 0,
};

const myMiddlewares = (f: StateCreator<IGeneralStore>) =>
  devtools(
    persist(f, {
      name: 'generalStore',
      storage: createJSONStorage(() => localStorage),
    }),
    {
      name: 'generalStore',
      enabled: true,
    }
  );

export const useGeneralStore = create<IGeneralStore>()(
  myMiddlewares((set, get) => ({
    ...INIT_STATE,
    increase: (by) => set(() => ({ count: get().count + by })),
    decrease: (by) => set(() => ({ count: get().count - by })),
  }))
);
