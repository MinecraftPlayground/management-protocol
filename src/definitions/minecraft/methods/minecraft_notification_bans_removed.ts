import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Player was removed from ban list
 */
export type MinecraftNotificationBansRemoved = NotificationObjectDefinition<
  'minecraft:notification/bans/removed',
  [{ player : PlayerObject }]
>
