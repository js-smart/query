export { injectQueryClient, provideQueryClient } from './lib/query-client';
export { injectQuery } from './lib/query';
export { injectMutation } from './lib/mutation';
export { injectIsFetching } from './lib/is-fetching';
export { injectIsMutating } from './lib/is-mutating';
export { injectInfiniteQuery } from './lib/infinite-query';

export {
  toPromise,
  createSuccessObserverResult,
  createPendingObserverResult,
} from './lib/utils';
export * from './lib/operators';
export * from '@tanstack/query-core';
export { ObservableQueryResult, SignalQueryResult } from './lib/types';
export { queryOptions } from './lib/query-options';
export { provideQueryClientOptions } from './lib/query-client-options';
export { intersectResults } from './lib/signals';
