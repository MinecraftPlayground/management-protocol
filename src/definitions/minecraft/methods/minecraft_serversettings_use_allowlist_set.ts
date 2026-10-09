import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Enable or disable the allowlist on the server (controls whether only allowlisted players can join).
 */
export type MinecraftServersettingsUseAllowlistSet = MethodObjectDefinition<{
  name : 'minecraft:serversettings/use_allowlist/set',
  params : [use: boolean],
  result : boolean
}>
