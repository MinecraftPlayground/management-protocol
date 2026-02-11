import type { TypedGameRuleObject, UntypedGameRuleObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Update game rule value
 */
export type MinecraftGamerulesUpdate = MethodObjectDefinition<
  'minecraft:gamerules/update',
  [{ gamerule : UntypedGameRuleObject }],
  { gamerule? : TypedGameRuleObject }
>
