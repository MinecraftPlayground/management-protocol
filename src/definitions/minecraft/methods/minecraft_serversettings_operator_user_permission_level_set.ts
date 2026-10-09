import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Set default operator permission level.
 */
export type MinecraftServersettingsOperatorUserPermissionLevelSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/operator_user_permission_level/set',
  params : [level: number],
  result : number
}>
