import type { TypedGameRuleObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Gamerule was changed
 */
export type MinecraftNotificationGamerulesUpdated = NotificationObjectDefinition<
  'minecraft:notification/gamerules/updated',
  [{ gamerule : TypedGameRuleObject }]
>
