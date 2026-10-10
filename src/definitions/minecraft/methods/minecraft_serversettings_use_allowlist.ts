import type { MethodObjectDefinition } from '../../../schema/index.ts';


/**
 * Get whether the allowlist is enabled on the server.
 */
export type MinecraftServersettingsUseAllowlist = MethodObjectDefinition<{
  name : 'minecraft:serversettings/use_allowlist',
  params : [],
  result : boolean
}>
