import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Server save started
 */
export type MinecraftNotificationServerSaving = NotificationObjectDefinition<{
  name : 'minecraft:notification/server/saving',
  params : []
}>
