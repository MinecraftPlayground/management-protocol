import type { PlayerObject } from '../schemas.ts';
import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the allowlist.
 */
export type MinecraftAllowlist = MethodObjectDefinition<{
  name : 'minecraft:allowlist',
  params : [],
  result : PlayerObject[]
}>
