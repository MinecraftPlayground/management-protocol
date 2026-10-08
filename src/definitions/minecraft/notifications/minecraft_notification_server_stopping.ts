import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Server shutting down
 */
export type MinecraftNotificationServerStopping = NotificationObjectDefinition<{

  name : 'minecraft:notification/server/stopping',
  params : []
}>
