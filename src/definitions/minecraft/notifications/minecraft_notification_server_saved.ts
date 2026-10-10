import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Server save completed
 */
export type MinecraftNotificationServerSaved = NotificationObjectDefinition<{
  name : 'minecraft:notification/server/saved',
  params : []
}>
