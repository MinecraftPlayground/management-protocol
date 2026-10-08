import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Player was removed from ban list
 */
export type MinecraftNotificationBansRemoved = NotificationObjectDefinition<{
  name : 'minecraft:notification/bans/removed',
  params : [player: PlayerObject]
}>
