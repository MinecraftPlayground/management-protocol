import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Server activity occurred. Rate limited to 1 notification per 30 seconds
 */
export type MinecraftNotificationServerActivity = NotificationObjectDefinition<{
  name : 'minecraft:notification/server/activity',
  params : []
}>
