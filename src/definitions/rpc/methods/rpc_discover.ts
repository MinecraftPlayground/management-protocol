import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Discover the RPC schema.
 */
export type RPCDiscover = MethodObjectDefinition<
  'rpc.discover',
  [],
  /** rpc schema */
  unknown[]
>
