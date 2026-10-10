import type { TypedGameRuleObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Gamerule was changed
 */
export type MinecraftNotificationGamerulesUpdated = NotificationObjectDefinition<{
  name : 'minecraft:notification/gamerules/updated',
  params : [gamerule: TypedGameRuleObject]
}>
