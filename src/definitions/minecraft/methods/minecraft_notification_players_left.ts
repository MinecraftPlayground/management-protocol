import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Player left
 */
export type MinecraftNotificationPlayersLeft = NotificationObjectDefinition<
  'minecraft:notification/players/left',
  [{ player : PlayerObject }]
>
