import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Server activity occurred. Rate limited to 1 notification per 30 seconds
 */
export type MinecraftNotificationServerActivity = NotificationObjectDefinition<
  'minecraft:notification/server/activity',
  never[]
>
