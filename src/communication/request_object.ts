import type { JsonRpcObject } from './json_rpc_object.ts';


/**
 * Represents a JSON-RPC request object.
 */
export interface RequestObject extends JsonRpcObject {
  /** Method name */
  method : string,
  /** Method parameters */
  params? : unknown,
  /** Request ID */
  id : string | number | null
}
