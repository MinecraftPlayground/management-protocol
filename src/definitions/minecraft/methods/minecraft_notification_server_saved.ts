import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Server save completed
 */
export type MinecraftNotificationServerSaved = NotificationObjectDefinition<
  'minecraft:notification/server/saved',
  never[]
>
