import type { NotificationObjectDefinition } from '../../../schema/index.ts';


/**
 * Ip was removed from ip ban list
 */
export type MinecraftNotificationIpBansRemoved = NotificationObjectDefinition<{
  name : 'minecraft:notification/ip_bans/removed',
  params : [ip: string]
}>
