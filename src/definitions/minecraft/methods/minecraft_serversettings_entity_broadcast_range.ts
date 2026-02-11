import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get the entity broadcast range as a percentage
 */
export type MinecraftServersettingsEntityBroadcastRange = MethodObjectDefinition<
  'minecraft:serversettings/entity_broadcast_range',
  never[],
  { percentage_points? : number }
>
