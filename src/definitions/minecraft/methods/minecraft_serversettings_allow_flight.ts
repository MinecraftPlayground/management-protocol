import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get whether flight is allowed for players in Survival mode
 */
export type MinecraftServersettingsAllowFlight = MethodObjectDefinition<
  'minecraft:serversettings/allow_flight',
  never[],
  { allowed? : boolean }
>
