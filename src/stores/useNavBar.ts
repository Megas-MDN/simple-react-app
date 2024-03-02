import { StateCreator, create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface IInitState {
  path: string;
  step: number;
}

const INIT_STATE: IInitState = {
  path: '/',
  step: 0,
};

interface INavBarStore extends IInitState {
  setPath: (path: string) => void;
  setStep: (step: number) => void;
}

const myMiddlewares = (f: StateCreator<INavBarStore>) =>
  persist(f, {
    name: 'navBarStore',
    storage: createJSONStorage(() => localStorage),
  });

export const useNavBar = create<INavBarStore>()(
  myMiddlewares((set, _get) => ({
    ...INIT_STATE,
    setPath: (path) => set(() => ({ path })),
    setStep: (step) => set(() => ({ step })),
  }))
);
