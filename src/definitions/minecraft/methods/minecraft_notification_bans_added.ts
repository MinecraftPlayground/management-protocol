import type { UserBanObject } from '../schemas.ts';
import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Player was added to ban list
 */
export type MinecraftNotificationBansAdded = NotificationObjectDefinition<
  'minecraft:notification/bans/added',
  [{ player : UserBanObject }]
>
