import type { PlayerObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Player was added to allowlist
 */
export type MinecraftNotificationAllowlistAdded = NotificationObjectDefinition<
  'minecraft:notification/allowlist/added',
  [{ player : PlayerObject }]
>
