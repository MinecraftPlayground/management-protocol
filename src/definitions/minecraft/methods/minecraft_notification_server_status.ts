import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';
import type { ServerStateObject } from '../schemas.ts';


/**
 * Server status heartbeat
 */
export type MinecraftNotificationServerStatus = NotificationObjectDefinition<
  'minecraft:notification/server/status',
  [{ status : ServerStateObject }]
>
