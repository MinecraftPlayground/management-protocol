/**
 * Represents a JSON-RPC error object.
 */
export interface ErrorObject {
  /** Error code */
  code : number,
  /** Error message */
  message : string,
  /** Optional error data */
  data? : unknown
}
