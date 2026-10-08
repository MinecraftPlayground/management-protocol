import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Player left
 */
export type MinecraftNotificationPlayersLeft = NotificationObjectDefinition<{
  name : 'minecraft:notification/players/left',
  params : [player: PlayerObject]
}>
