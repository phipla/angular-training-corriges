import { Action } from '@ngrx/store';
import { AlpacaList, createDefaultAlpacaList } from './alpaca-list.interface';
import { AlpacaListStore } from './alpaca-list.store';
import { Alpaca } from './alpaca';

export function alpacaListReducer(
  state: AlpacaList,
  action: Action
): AlpacaList {
  state = state || createDefaultAlpacaList();

  switch (action.type) {
    case AlpacaListStore.RETRIEVE: return { ...state, loading: true, loadingError: null };
    case AlpacaListStore.CREATE: return { ...state, loading: true, loadingError: null };
    case AlpacaListStore.UPDATE: return { ...state, loading: true, loadingError: null };
    case AlpacaListStore.DELETE: return { ...state, loading: true, loadingError: null };

    case AlpacaListStore.RETRIEVE_SUCCESS:
      return {
        ...state,
        loading: false, loadingError: null,
        alpacas: action.payload.alpacas.map((a: any) => new Alpaca(a))
      };
    case AlpacaListStore.CREATE_SUCCESS:
      return {
        ...state,
        loading: false, loadingError: null,
        alpacas: state.alpacas.concat(new Alpaca(action.payload.alpaca))
      };
    case AlpacaListStore.UPDATE_SUCCESS:
      return {
        ...state,
        loading: false, loadingError: null,
        alpacas: state.alpacas.map(a => a.id === action.payload.id ? new Alpaca(action.payload.alpaca) : a)
      };
    case AlpacaListStore.DELETE_SUCCESS:
      return {
        ...state,
        loading: false, loadingError: null,
        alpacas: state.alpacas.filter(a => a.id !== action.payload.id)
      };
    case AlpacaListStore.ERROR:
      return {
        ...state,
        loading: false, loadingError: action.payload.error
      };
    default: return state;
  }
}

