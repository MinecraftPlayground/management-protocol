import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get the spawn protection radius in blocks (only operators can edit within this area).
 */
export type MinecraftServersettingsSpawnProtectionRadius = MethodObjectDefinition<{
  name : 'minecraft:serversettings/spawn_protection_radius',
  params : [],
  result : number
}>
