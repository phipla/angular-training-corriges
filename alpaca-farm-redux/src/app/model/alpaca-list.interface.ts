import { Alpaca } from './alpaca';

export interface AlpacaList {
  readonly loading: boolean;
  readonly loadingError: any;
  readonly alpacas: Alpaca[];
}

export function createDefaultAlpacaList(): AlpacaList {
  return {
    loading: false,
    loadingError: null,
    alpacas: []
  };
};
