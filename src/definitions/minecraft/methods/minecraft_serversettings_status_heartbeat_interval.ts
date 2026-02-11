import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get the interval in seconds between server status heartbeats
 */
export type MinecraftServersettingsStatusHeartbeatInterval = MethodObjectDefinition<
  'minecraft:serversettings/status_heartbeat_interval',
  never[],
  { seconds? : number }
>
