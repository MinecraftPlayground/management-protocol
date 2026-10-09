/**
 * Definition interface for JSON-RPC notifications (server-initiated events).
 * 
 * Extends the base Definition interface with a 'notification' type discriminator.
 * Notifications are server-initiated messages that don't expect a response from the client.
 * They follow a fire-and-forget pattern for event broadcasting.
 * 
 * @template NotificationObjectDefinitionParameters Notification parameters
 * 
 * @example
 * ```ts
 * import type { NotificationObjectDefinition } from '@minecraft-server/management-protocol/schema';
 * 
 * 
 * // Notification without parameters
 * type ServerStartedNotification = NotificationObjectDefinition<{
 *   name : 'minecraft:notification/server/started'
 * }>;
 * ```
 * @example
 * ```ts
 * import type { NotificationObjectDefinition } from '@minecraft-server/management-protocol/schema';
 * 
 * 
 * // Notification with parameters
 * type PlayerJoinedNotification = NotificationObjectDefinition<{
 *   name : 'minecraft:notification/players/joined',
 *   params : [{ player : PlayerObject }]
 * }>;
 * ```
 */
export interface NotificationObjectDefinition<NotificationObjectDefinitionParameters extends {
  /** Notification name (ex. `'minecraft:notification/players/joined'`). */
  name : string

  /** Tuple type of parameters (ex. `[{ player: PlayerObject }]` or `[]`). */
  params? : unknown[]
} = {
  name : string,
  params : unknown[]
}> /* extends Definition<NotificationObjectDefinitionParameters> */ {

  name : NotificationObjectDefinitionParameters['name']

  params : NotificationObjectDefinitionParameters['params'] extends undefined
    ? []
    : NotificationObjectDefinitionParameters['params']
  /**
   * Type discriminator to distinguish notifications from methods.
   * 
   * Always set to 'notification' for notification definitions.
   */
  type : 'notification'
}
