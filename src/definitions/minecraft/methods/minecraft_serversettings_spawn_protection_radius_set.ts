import type { MethodObjectDefinition } from '../../../json_rpc/schema/method_object_definition.ts';


/**
 * Set the spawn protection radius in blocks (only operators can edit within this area)
 */
export type MinecraftServersettingsSpawnProtectionRadiusSet = MethodObjectDefinition<
  'minecraft:serversettings/spawn_protection_radius/set',
  [{ radius : number }],
  { radius? : number }
>
