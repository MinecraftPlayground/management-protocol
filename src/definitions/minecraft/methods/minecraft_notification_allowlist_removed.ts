import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Player was removed from allowlist
 */
export type MinecraftNotificationAllowlistRemoved = NotificationObjectDefinition<
  'minecraft:notification/allowlist/removed',
  [{ player : PlayerObject }]
>
