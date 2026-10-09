import type { MethodObjectDefinition } from './method_object_definition.ts';
import type { NotificationObjectDefinition } from './notification_object_definition.ts';


/**
 * Definition interface for JSON-RPC methods and/or notifications.
 * 
 * @see {@link MethodObjectDefinition} for method definitions
 * @see {@link NotificationObjectDefinition} for notification definitions
 */
export type MethodOrNotificationObjectDefinition = 
  | MethodObjectDefinition
  | NotificationObjectDefinition
