import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the interval in seconds between server status heartbeats.
 */
export type MinecraftServersettingsStatusHeartbeatIntervalSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/status_heartbeat_interval/set',
  params : [seconds: number],
  result : number
}>
