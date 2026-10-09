import type { OperatorObject, PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Deop players.
 */
export type MinecraftOperatorsRemove = MethodObjectDefinition<{
  name : 'minecraft:operators/remove',
  params : [remove: PlayerObject[]],
  result : OperatorObject[]
}>
