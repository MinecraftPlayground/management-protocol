import type { OperatorObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Op players.
 */
export type MinecraftOperatorsAdd = MethodObjectDefinition<{
  name : 'minecraft:operators/add',
  params : [add: OperatorObject[]],
  result : OperatorObject[]
}>
