import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Save server state.
 */
export type MinecraftServerSave = MethodObjectDefinition<{
  name : 'minecraft:server/save',
  params : [flush: boolean],
  result : boolean
}>
