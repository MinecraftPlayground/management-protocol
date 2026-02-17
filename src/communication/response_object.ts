import type { ErrorObject } from './error_object.ts';
import type { JsonRpcObject } from './json_rpc_object.ts';


interface FailedResponseObject extends JsonRpcObject {
  /** JSON-RPC error */
  error : ErrorObject,
  /** JSON-RPC id */
  id : string | number | null
}

interface SuccessResponseObject extends JsonRpcObject {
  /** JSON-RPC result */
  result : unknown,
  /** JSON-RPC id */
  id : string | number | null
}

/**
 * Represents a JSON-RPC response object.
 */
export type ResponseObject = FailedResponseObject | SuccessResponseObject
