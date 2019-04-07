import { IGetPlayersAction } from './allPlayers.actions';
export declare function getAllPlayers(
  action: IGetPlayersAction,
): IterableIterator<
  | import('@redux-saga/types').SimpleEffect<
      'CALL',
      import('redux-saga/effects').CallEffectDescriptor
    >
  | import('@redux-saga/types').SimpleEffect<'GET_CONTEXT', string>
  | import('@redux-saga/types').SimpleEffect<
      'PUT',
      import('redux-saga/effects').PutEffectDescriptor<any>
    >
>;
