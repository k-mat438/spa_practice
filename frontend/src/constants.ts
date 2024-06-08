export type RequestState = 'INITIAL' | 'LOADING' | 'OK';

export const REQUEST_STATE = {
  INITIAL: 'INITIAL' as RequestState,
  LOADING: 'LOADING' as RequestState,
  OK: 'OK' as RequestState,
}

export const HTTP_STATUS_CODE = {
  NOT_ACCEPTABLE: 406,
}
