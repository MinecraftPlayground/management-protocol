import type { OperatorObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set all oped players.
 */
export type MinecraftOperatorsSet = MethodObjectDefinition<{
  name : 'minecraft:operators/set',
  params : [operators: OperatorObject[]],
  result : OperatorObject[]
}>
