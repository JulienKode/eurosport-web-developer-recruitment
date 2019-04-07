export declare const allCoreSagas: import('@redux-saga/types').SimpleEffect<
  'FORK',
  import('redux-saga/effects').ForkEffectDescriptor
>[];
export declare function rootSaga(): IterableIterator<
  import('@redux-saga/types').CombinatorEffect<
    'ALL',
    import('@redux-saga/types').SimpleEffect<
      'FORK',
      import('redux-saga/effects').ForkEffectDescriptor
    >
  >
>;
