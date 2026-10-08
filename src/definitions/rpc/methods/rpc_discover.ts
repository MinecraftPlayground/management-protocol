import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Discover the RPC schema.
 */
export type RPCDiscover = MethodObjectDefinition<{

  name : 'rpc.discover',
  params : [],
  /** rpc schema */
  result : unknown[]
}>
