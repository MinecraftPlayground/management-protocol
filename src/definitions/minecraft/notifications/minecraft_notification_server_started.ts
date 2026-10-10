import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Server started
 */
export type MinecraftNotificationServerStarted = NotificationObjectDefinition<{
  name : 'minecraft:notification/server/started',
  params : []
}>
