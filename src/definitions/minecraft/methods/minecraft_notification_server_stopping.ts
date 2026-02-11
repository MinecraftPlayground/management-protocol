import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Server shutting down
 */
export type MinecraftNotificationServerStopping = NotificationObjectDefinition<
  'minecraft:notification/server/stopping',
  never[]
>
