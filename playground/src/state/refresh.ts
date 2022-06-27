// -------------------------------------------------------------

import { SetState } from 'zustand';
import { createStore } from './createStore';

type TRefreshState = {
  readonly refresh: number;
  readonly setRefresh: (refresh: number) => void;
}

// -------------------------------------------------------------

const useRefreshStore = createStore<TRefreshState>(
  (set: SetState<TRefreshState>): TRefreshState => ({
    refresh: Date.now(),
    setRefresh: (refresh: number): void => set({ refresh }),
  }),
);

function useRefreshValue(): TRefreshState['refresh'] {
  return useRefreshStore((state: TRefreshState) => state.refresh);
}

function useSetRefreshValue(): TRefreshState['setRefresh'] {
  return useRefreshStore((state: TRefreshState) => state.setRefresh);
}

export function useRefreshState(): [
  TRefreshState['refresh'],
  TRefreshState['setRefresh'],
] {
  return [useRefreshValue(), useSetRefreshValue()];
}
