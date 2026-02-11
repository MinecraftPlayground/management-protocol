import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Server started
 */
export type MinecraftNotificationServerStarted = NotificationObjectDefinition<
  'minecraft:notification/server/started',
  never[]
>
