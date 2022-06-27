import produce, { Draft } from 'immer';
import create, { GetState, SetState, State, StateCreator, StoreApi } from 'zustand';
import { flow } from 'lodash';
import { devtools } from 'zustand/middleware';

// from https://github.com/pmndrs/zustand#middleware
// Turn the set method into an immer proxy

const immer =
  <
    T extends State,
    CustomSetState extends SetState<T>,
    CustomGetState extends GetState<T>,
    CustomStoreApi extends StoreApi<T>
  >(config: StateCreator<T>): StateCreator<T, CustomSetState, CustomGetState, CustomStoreApi> =>
    (set, get, api) =>
      config((partial, replace) => {
        const nextState = typeof partial === 'function' ? produce(partial as (state: Draft<T>) => T) : (partial as T);
        return set(nextState, replace);
      }, get, api);

export function createStore<T extends object>(params) {
  return flow([devtools, immer, (data) => create<T>(data)])(params);
}
