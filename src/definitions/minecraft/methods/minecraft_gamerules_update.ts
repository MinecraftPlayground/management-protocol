import type { TypedGameRuleObject, UntypedGameRuleObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Update game rule value.
 */
export type MinecraftGamerulesUpdate = MethodObjectDefinition<{
  name : 'minecraft:gamerules/update',
  params : [gamerule: UntypedGameRuleObject],
  result : TypedGameRuleObject
}>
