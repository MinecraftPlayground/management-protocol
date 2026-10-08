import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Player joined
 */
export type MinecraftNotificationPlayersJoined = NotificationObjectDefinition<{
  name : 'minecraft:notification/players/joined',
  params : [player: PlayerObject]
}>
