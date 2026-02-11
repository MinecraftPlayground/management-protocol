import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Player joined
 */
export type MinecraftNotificationPlayersJoined = NotificationObjectDefinition<
  'minecraft:notification/players/joined',
  [{ player : PlayerObject }]
>
