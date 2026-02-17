import type { JsonRpcObject } from './json_rpc_object.ts';


/**
 * Represents a JSON-RPC notification object.
 */
export interface NotificationObject extends JsonRpcObject {
  /** Notification method */
  method : string,
  /** Notification parameters */
  params? : unknown
  id? : never
}
