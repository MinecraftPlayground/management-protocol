import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set the spawn protection radius in blocks (only operators can edit within this area).
 */
export type MinecraftServersettingsSpawnProtectionRadiusSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/spawn_protection_radius/set',
  params : [radius: number],
  result : number
}>
