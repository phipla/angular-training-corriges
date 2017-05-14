import { Alpaca } from './alpaca';
import { AlpacaList } from './alpaca-list.interface';
import { AlpacaListStore } from './alpaca-list.store';
import { alpacaListReducer } from './alpaca-list.reducer';
import { createAction } from './action';

describe('AlpacaListReducer', () => {
  it('RETRIEVE', () => {
    // Given an initial state
    const initialState: AlpacaList = { loading: true, loadingError: null, alpacas: [] };
    // When the reducer is called with RETRIEVE
    const updatedState = alpacaListReducer(initialState, createAction(AlpacaListStore.RETRIEVE, {}));
    // Then loading is true
    expect(updatedState.loading).toBe(true);
    // And loadingError is set to null
    expect(updatedState.loadingError).toBe(null);
  });

  it('CREATE', () => {
    // Given an initial state
    const initialState: AlpacaList = { loading: true, loadingError: null, alpacas: [] };
    // When the reducer is called with RETRIEVE
    const updatedState = alpacaListReducer(initialState, createAction(AlpacaListStore.RETRIEVE, {}));
    // Then loading is true
    expect(updatedState.loading).toBe(true);
    // And loadingError is set to null
    expect(updatedState.loadingError).toBe(null);
  });

  it('UPDATE', () => {
    // Given an initial state
    const initialState: AlpacaList = { loading: true, loadingError: null, alpacas: [] };
    // When the reducer is called with RETRIEVE
    const updatedState = alpacaListReducer(initialState, createAction(AlpacaListStore.RETRIEVE, {}));
    // Then loading is true
    expect(updatedState.loading).toBe(true);
    // And loadingError is set to null
    expect(updatedState.loadingError).toBe(null);
  });

  it('DELETE', () => {
    // Given an initial state
    const initialState: AlpacaList = { loading: true, loadingError: null, alpacas: [] };
    // When the reducer is called with RETRIEVE
    const updatedState = alpacaListReducer(initialState, createAction(AlpacaListStore.RETRIEVE, {}));
    // Then loading is true
    expect(updatedState.loading).toBe(true);
    // And loadingError is set to null
    expect(updatedState.loadingError).toBe(null);
  });

  it('RETRIEVE_SUCCESS', () => {
    // Given an initial state
    const initialState: AlpacaList = {
      loading: true, loadingError: null, alpacas: []
    };
    // When the reducer is called with RETRIEVE_SUCCESS
    const updatedState = alpacaListReducer(
      initialState,
      createAction(AlpacaListStore.RETRIEVE_SUCCESS, { alpacas: [ new Alpaca('test' )] })
    );
    // Then loading is false
    expect(updatedState.loading).toBe(false);
    // And the alpacas list of the new array contains the new alpaca
    expect(updatedState.alpacas).toEqual(jasmine.arrayContaining(
      [new Alpaca('test')]
    ));
  });

  it('CREATE_SUCCESS', () => {
    // Given an initial state
    const initialState: AlpacaList = {
      loading: true, loadingError: null, alpacas: [ new Alpaca('test1') ]
    };
    // When the reducer is called with CREATE_SUCCESS
    const updatedState = alpacaListReducer(
      initialState,
      createAction(AlpacaListStore.CREATE_SUCCESS, { alpaca: new Alpaca('test2') })
    );
    // Then loading is false
    expect(updatedState.loading).toBe(false);
    // And the alpacas list of the new array contains the new alpaca
    expect(updatedState.alpacas).toEqual(jasmine.arrayContaining(
      [new Alpaca('test1'), new Alpaca('test2')]
    ));
  });

  it('UPDATE_SUCCESS', () => {
    // Given an initial state
    const initialState: AlpacaList = {
      loading: true, loadingError: null, alpacas: [
        new Alpaca({ id: 1, name: 'test1' }),
        new Alpaca({ id: 2, name: 'test2' })
      ]
    };
    // When the reducer is called with UPDATE_SUCCESS
    const updatedState = alpacaListReducer(
      initialState,
      createAction(AlpacaListStore.UPDATE_SUCCESS, {
        id: 1,
        alpaca: new Alpaca({ id: 1, name: 'test1-updated' }),
      })
    );
    // Then loading is false
    expect(updatedState.loading).toBe(false);
    // And the alpacas list of the new array contains the new alpaca
    expect(updatedState.alpacas).toEqual(jasmine.arrayContaining([
      new Alpaca({ id: 1, name: 'test1-updated' }),
      new Alpaca({ id: 2, name: 'test2' })
    ]));
  });

  it('DELETE_SUCCESS', () => {
    // Given an initial state
    const initialState: AlpacaList = {
      loading: true, loadingError: null, alpacas: [
        new Alpaca({ id: 1, name: 'test1' }),
        new Alpaca({ id: 2, name: 'test2' })
      ]
    };
    // When the reducer is called with DELETE_SUCCESS
    const updatedState = alpacaListReducer(
      initialState,
      createAction(AlpacaListStore.DELETE_SUCCESS, { id: 1 })
    );
    // Then loading is false
    expect(updatedState.loading).toBe(false);
    // And the element is deleted from the list
    expect(updatedState.alpacas.length).toEqual(1);
  });

  it('ERROR', () => {
    // Given an initial state
    const initialState: AlpacaList = {
      loading: true, loadingError: null, alpacas: [ ]
    };
    // When the reducer is called with ERROR
    const updatedState = alpacaListReducer(
      initialState,
      createAction(AlpacaListStore.ERROR, { error: 'test-error' })
    );
    // Then loading is false
    expect(updatedState.loading).toBe(false);
    // And loadingError contains the returned error
    expect(updatedState.loadingError).toBe('test-error');
  });
});
