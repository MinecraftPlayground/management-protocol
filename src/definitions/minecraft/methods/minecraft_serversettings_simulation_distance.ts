import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get the server's simulation distance in chunks
 */
export type MinecraftServersettingsSimulationDistance = MethodObjectDefinition<
  'minecraft:serversettings/simulation_distance',
  never[],
  { distance? : number }
>
