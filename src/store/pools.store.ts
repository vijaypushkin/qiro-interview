import { create } from 'zustand';

type PoolState = {
  active: 'deposit' | 'withdraw';
  setActive: (active: 'deposit' | 'withdraw') => void;
  inputValue: string;
  setInputValue: (value: string) => void;
};

export const usePoolStore = create<PoolState>((set) => ({
  inputValue: '',
  active: 'deposit',
  setActive: (active) => set({ active }),
  setInputValue: (value) => set({ inputValue: value }),
}));
