/**
 * Definition interface for JSON-RPC methods (request/response pattern).
 * 
 * Extends the base Definition interface with a 'method' type discriminator.
 * Methods follow the request/response pattern where a client sends a request
 * and expects a response from the server.
 * 
 * @template MethodObjectDefinitionParameters Method parameters
 * 
 * @example
 * ```ts
 * import type { MethodObjectDefinition } from '@minecraft-server/management-protocol/schema';
 * import type { minecraft } from '@minecraft-server/management-protocol/definitions';
 * 
 * 
 * // Method without parameters
 * type GetPlayersMethod = MethodObjectDefinition<{
 *   name : 'minecraft:players',
 *   result : minecraft.schemas.PlayerObject[]
 * }>;
 * ```
 * @example
 * ```ts
 * import type { MethodObjectDefinition } from '@minecraft-server/management-protocol/schema';
 * import type { minecraft } from '@minecraft-server/management-protocol/definitions';
 * 
 * 
 * // Method with parameters
 * type SetDifficultyMethod = MethodObjectDefinition<{
 *   name : 'minecraft:serversettings/difficulty/set',
 *   params : [difficulty : minecraft.schemas.Difficulty],
 *   result : minecraft.schemas.Difficulty
 * }>;
 * ```
 */
export interface MethodObjectDefinition<MethodObjectDefinitionParameters extends {
  /** Method  name (ex. `'minecraft:players'`). */
  name : string

  /** Tuple type of parameters (ex. `[{ add: PlayerObject[] }]`). */
  params? : unknown[]
  
  /** Result type (ex. `{ players?: PlayerObject[] }`). */
  result : unknown
} = {
  name : string,
  params : unknown[]
  result : unknown
}> {
  name : MethodObjectDefinitionParameters['name']

  params : MethodObjectDefinitionParameters['params'] extends undefined
    ? []
    : MethodObjectDefinitionParameters['params']
  result : MethodObjectDefinitionParameters['result']
  /**
   * Type discriminator to distinguish methods from notifications.
   * 
   * Always set to 'method' for method definitions.
   */
  type : 'method'
}
