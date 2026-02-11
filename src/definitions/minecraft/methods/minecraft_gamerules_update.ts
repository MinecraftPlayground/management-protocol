import type { TypedGameRuleObject, UntypedGameRuleObject } from '../schemas.ts';
import type { MethodObject } from '../../../json_rpc/schema/method_object.ts';


/**
 * Update game rule value
 */
export type MinecraftGamerulesUpdate = MethodObject<
  'minecraft:gamerules/update',
  [{ gamerule : UntypedGameRuleObject }],
  { gamerule? : TypedGameRuleObject }
>
