import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface TimerState {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
  font: 'kumbh' | 'roboto' | 'space';
  color: 'red' | 'cyan' | 'purple';
  setPomodoro: (minutes: number) => void;
  setShortBreak: (minutes: number) => void;
  setLongBreak: (minutes: number) => void;
  setFont: (font: 'kumbh' | 'roboto' | 'space') => void;
  setColor: (color: 'red' | 'cyan' | 'purple') => void;
}

export const useTimerStore = create<TimerState>()(
  persist(
    (set) => ({
      pomodoro: 25,
      shortBreak: 5,
      longBreak: 15,
      font: 'kumbh',
      color: 'red',
      setPomodoro: (minutes: number) => set({ pomodoro: minutes }),
      setShortBreak: (minutes: number) => set({ shortBreak: minutes }),
      setLongBreak: (minutes: number) => set({ longBreak: minutes }),
      setFont: (font: 'kumbh' | 'roboto' | 'space') => set({ font }),
      setColor: (color: 'red' | 'cyan' | 'purple') => set({ color }),
    }),
    {
      name: 'timer-settings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
