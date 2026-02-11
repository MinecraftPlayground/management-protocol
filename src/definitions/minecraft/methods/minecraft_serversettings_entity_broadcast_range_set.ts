import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Set the entity broadcast range as a percentage
 */
export type MinecraftServersettingsEntityBroadcastRangeSet = MethodObjectDefinition<
  'minecraft:serversettings/entity_broadcast_range/set',
  [{ percentage_points : number }],
  { percentage_points? : number }
>
