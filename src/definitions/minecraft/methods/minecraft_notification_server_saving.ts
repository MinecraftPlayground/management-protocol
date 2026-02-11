import type { NotificationObjectDefinition } from '../../../json_rpc/schema/notification_object_definition.ts';


/**
 * Server save started
 */
export type MinecraftNotificationServerSaving = NotificationObjectDefinition<
  'minecraft:notification/server/saving',
  never[]
>
