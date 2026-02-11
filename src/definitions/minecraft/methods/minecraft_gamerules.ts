import type { TypedGameRuleObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Get the available game rule keys and their current values
 */
export type MinecraftGamerules = MethodObjectDefinition<
  'minecraft:gamerules',
  never[],
  { gamerules? : TypedGameRuleObject[] }
>

